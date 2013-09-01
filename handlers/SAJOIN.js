var server = require('../server');

exports.handler = function(msg) {

	server.send(':' +  msg.bits[0] + ' JOIN ' + msg.bits[1]);

	console.log('Forced ' + msg.bits[0] + ' to join ' + msg.bits[1]);

};