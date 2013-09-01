var server = require('../server');

exports.handler = function(msg) {
	//:enkindle JOIN #shit,#fuck,#somechan,#mafia

	var chans = msg.bits[0];

	chans.split(',').forEach(function(chan) {
		server.locals.AddUserToChannel(msg.src, chan);
	});
};