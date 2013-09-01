var bot = require('../server');
var Modes = require('./modes');

var User = function(attrs) {
	this.nickname = '';

	this.last_active = new Date().getTime();
};

User.prototype = {
	 nickname: ''
	,hopcount: -1
	,username: ''
	,host: ''
	,servertoken: ''
	,realname: ''

	,modes: new Modes()

	,server: '' //should store the server of the user

	,last_active: 0
};




User.prototype.send = function(cmd, data) {
	bot.send(':' + this.nickname + ' ' + cmd + ' :' + data);

	this.last_active = new Date().getTime();
};


module.exports = User;