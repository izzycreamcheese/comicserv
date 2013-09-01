var server = require('../server');

exports.handler = function(msg) {
	//>> :enkindle[alt] MODE #opers -oh fakeuser1 fakeuser1
	//>> :enkindle[alt] MODE #opers +o fakeuser1
	//>> :enkindle[alt] MODE #opers +h-o fakeuser1 fakeuser1

	//>> :enkindle[alt] MODE #opers +i

	console.log(msg.bits);


	if (msg.bits[0][0] == '#' || msg.bits[0][0] == '&') { //could be channel modes or user\chan mode
		var chan = server.channels[msg.bits[0]];

		if (chan) {

		} else {
			console.error('Got mode change for channel that does not exist: ' + msg.bits[0])
		}

	} else { //this should be a user
		var user = server.users[msg.bits[0]];

		if (user) {
			user.modes.modify(msg.data);
		} else {
			console.error('Got mode change for user that does not exist: ' + msg.bits[0])
		}
	}

};