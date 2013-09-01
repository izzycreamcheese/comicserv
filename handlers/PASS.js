var server = require('../server');

exports.handler = function(msg) {
	if (msg.data != config.server.password_receive) {
		console.error('BAD PASSWORD FROM SERVER');

		server.send('SQUIT ' + config.server.name + ' ' + (reason || 'Fucking off.'));
	} else {
		console.log('Password from the server is good.')
	}

};