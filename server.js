/*
 https://tools.ietf.org/html/rfc1459.html#section-1.3
 */


//Modules
var console = require('console');
var net = require('net');
var clc = require('cli-color');
var config = require('./config');
var fs = require('fs');
var path = require('path');

//Stuff
var buffer = '';
var servers = {};
var users = {};
var channels = {};
var protoctl = {};

var message_handlers = {};
var local_handlers = {};

//Load message handlers
var files = fs.readdirSync('./handlers/');
files.forEach(function(file) {
	var n = file.substr(0, file.length - 3);
	var h = require('./handlers/' + n);

	message_handlers[n] = h.handler;
});


//alias tokens for the message handlers
var tokens = require('./tokens');
Object.keys(tokens).forEach(function(cmd) {
	if (message_handlers[cmd]) {
		message_handlers[tokens[cmd]] = message_handlers[cmd];
	}
});


//Load local handlers
var files = fs.readdirSync('./locals/');
files.forEach(function(file) {
	var n = file.substr(0, file.length - 3);
	var h = require('./locals/' + n);

	local_handlers[n] = h.handler;
});



//fire up the socket
var server_sock = net.connect(
    {
         host: config.remote.host
        ,port: config.remote.port
    },
    function() { //'connect' listener
        console.log('client connected');

        send('PASS :' + config.server.password_connect);
        send('SERVER ' +  config.server.name + ' 17 :[' +  config.server.name + '] MR ChatServ');
    }
);

//woo, we got us some datas
server_sock.on('data', function(data) {
    buffer += data;

    var offset = -1;
    var last_offset = 0;
    while ((offset = buffer.indexOf("\r\n", last_offset)) >= 0) {
        var msg = buffer.substr(last_offset, offset - last_offset);

		console.log(clc.xterm(70)('>> ' + msg));

        if (msg.length == 0) { //don't know if this can happen, but check for it anyway
            continue;
        }
        else {
			handle_line(msg);
		}

        last_offset = offset + 2;
    }

	buffer = buffer.substr(last_offset);
});

//socket error, time to fail
//TODO: We should probably try to reconnect
server_sock.on('error', function(data) {
	console.error('Server Socket Error: ' + data);
});

////TODO: We should probably try to reconnect
server_sock.on('end', function() {
	console.log('disconnected');
});

function parse_command(text)
{
	var finish = false;
	var res = {'src': null, 'command': null, 'bits': [], data: null};
	var offset = text.indexOf(" ");
	var last_offset = 0;
	var bit = '';

	res.command = text.substr(last_offset, offset - last_offset);
	last_offset = offset + 1;

	while ((offset = text.indexOf(" ", last_offset)) >= 0) {
		bit = text.substr(last_offset, offset - last_offset);

		if (bit[0] == ":") {
			finish = true;
			break;
		}

		res.bits.push(bit);

		last_offset = offset + 1;
	}

	if (last_offset + 1 < text.length) {
		bit = text.substr(last_offset);

		if (bit[0] == ":") {
			res.data = bit.substr(1);
		} else {
			res.bits.push(bit);
		}
	}

	return res;
}

function parse_message(text)
{
	var finish = false;
	var res = {'src': null, 'command': null, 'bits': [], data: null};
	var offset = text.indexOf(" ");
	var last_offset = 1;
	var bit = '';

	res.src = text.substr(last_offset, offset - last_offset);
	last_offset = offset + 1;

	offset = text.indexOf(" ", last_offset);
	if (offset == -1 ) {
		res.command = text.substr(last_offset);

	} else {
		res.command = text.substr(last_offset, offset - last_offset);
		last_offset = offset + 1;

		while ((offset = text.indexOf(" ", last_offset)) >= 0) {
			bit = text.substr(last_offset, offset - last_offset);

			if (bit[0] == ":") {
				finish = true;
				break;
			}

			res.bits.push(bit);

			last_offset = offset + 1;
		}

		if (last_offset + 1 < text.length) {
			bit = text.substr(last_offset);

			if (bit[0] == ":") {
				res.data = bit.substr(1);
			} else {
				res.bits.push(bit);
			}
		}
	}

	return res;
}


function handle_line(line)
{
	var msg, fn;

	if (line[0] == ':') { //this is an incoming message
		msg = parse_message(line);
	}
	else { //named or numerical command
		msg = parse_command(line);
	}

	if ((fn = message_handlers[msg.command])) {
		fn(msg);
	} else {
		console.log(clc.red('Unhandled: ' + msg.command));
	}
}


function send(text)
{
	console.log(clc.xterm(32)('<< ' + text));

	server_sock.write(text + '\r\n');
}



module.exports.send = send;
module.exports.users = users;
module.exports.channels = channels;
module.exports.protoctl = protoctl;
module.exports.locals = local_handlers;

console.log('Locked and Loaded');