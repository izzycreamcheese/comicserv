var server = require('../server');
var Modes = require('../classes/modes');

exports.handler = function(user, chan) {

	if (!server.channels[chan]) {
		server.channels[chan] = {
			 modes: new Modes()
			,users: {}
		};
	}

	server.channels[chan].users[user] = '';
};