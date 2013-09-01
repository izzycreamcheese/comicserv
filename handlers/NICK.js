var server = require('../server');
var Modes = require('../classes/modes');

exports.handler = function(msg) {

	if (msg.src) { //this is someone changing their nick
		server.users[msg.src].nickname = msg.bits[0];
		server.users[msg.bits[0]] = server.users[msg.src];
		delete server.users[msg.src];

		console.log('Changed nick: ' + msg.src + ' to ' + msg.bits[0]);

	} else { //this is the remote server announcing a user
		//NICKv1
		//Parameters: <nickname> <hopcount> <?>        <username> <host>                 <servertoken> <umode> <realname>
		//            syrk       5                     kalt       millennium.stealth.net 34            +i      :Christophe Kalt ; New

		//NICKv2
		//               0          1      2          3          4        5         6              7        8
		//:<sender> NICK <nickname> <hops> <TS>       <username> <host>   <server>  <servicestamp> <umodes> <vhost> :<info>
		//<MISSING> NICK enkindle   1      1361501943 vbaspcppgu activate.adobe.com irc.crosma.us  0                :Matt
		//this still isnt right...

		var user = {
			 nickname: msg.bits[0]
			,hopcount: msg.bits[1]
			,username: msg.bits[3]
			,host: msg.bits[4]
			,servertoken: msg.bits[5]
			,realname: msg.data

			,modes: new Modes()
		};

		server.users[user.nickname] = user;

		console.log('Added new user: ' + user.nickname + ' from ' + user.servertoken)
	}

};