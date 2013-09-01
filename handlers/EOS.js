var server = require('../server');

exports.handler = function(msg) {

	console.log('Huh');
	server.send('NICK '+config.bot.user.nick+' 1 1361508010 '+config.bot.user.username+' '+config.bot.user.server+' '+config.server.name+' 0 :'+config.bot.user.name+'');
	//bot.send(':fakeuser1 MODE enkindle :+iwx');
	//bot.send(':fakeuser1 SETHOST fake.mafiareturns.com');
	//bot.send(':fakeuser1 JOIN #mafia,#fuck,#fuck');

	//bot.send(':fakeuser1 PRIVMSG #fuck :Testing');
	//bot.send(':doesntexist PRIVMSG #fuck :Testing');

	console.log(server.channels);
	console.log(server.users);
};