var server = require('../server');

exports.handler = function(msg) {
	//PROTOCTL NOQUIT TOKEN NICKv2 SJOIN SJOIN2 UMODE2 VL SJ3 NS SJB64 TKLEXT NICKIP ESVID
	//PROTOCTL CHANMODES=beI,kfL,lj,psmntirRcOAQKVCuzNSMTGZ NICKCHARS= MLOCK
	//http://chat.ykt.ru/forum/viewtopic.php?f=1&t=194

	msg.bits.forEach(function(item) {
		item = item.split('=');

		if (item.length == 2) {
			server.protoctl[item[0]] = true;
		} else {
			server.protoctl[item[0]] = item[1];
		}
	});
};