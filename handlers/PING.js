var server = require('../server');

exports.handler = function(msg) {

	server.send('PONG :' +  msg.data);

};