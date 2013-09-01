var tokens = {
	 'PRIVMSG': '!'
	,'WHOIS': '#'
	,'NICK': '&'
	,'SERVER': '\''
	,'TOPIC': ')'
	,'INVITE': '*'
	,'VERSION': '+'
	,'QUIT': ','
	,'SQUIT': '-'
	,'KILL': '.'
	,'INFO': '/'
	,'LINKS': '0'
	,'STATS': '2'
	,'HELP': '4'
	,'ERROR': '5'
	,'AWAY': '6'
	,'CONNECT': '7'
	,'PING': '8'
	,'PONG': '9'
	,'PASS': '<'
	,'TIME': '>'
	,'ADMIN': '@'
	,'SETHOST': 'AA'
	,'NACHAT': 'AC'
	,'SETIDENT': 'AD'
	,'SETNAME': 'AE'
	,'LAG': 'AF'
	,'SDESC': 'AG'
	,'KNOCK': 'AI'
	,'CREDITS': 'AJ'
	,'LICENSE': 'AK'
	,'CHGHOST': 'AL'
	,'RPING': 'AM'
	,'RPONG': 'AN'
	,'NETINFO': 'AO'
	,'SENDUMODE': 'AP'
	,'ADDMOTD': 'AQ'
	,'ADDOMOTD': 'AR'
	,'SVSMOTD': 'AS'
	,'SMO': 'AU'
	,'OPERMOTD': 'AV'
	,'TSCTL': 'AW'
	,'SAJOIN': 'AX'
	,'SAPART': 'AY'
	,'CHGIDENT': 'AZ'
	,'NOTICE': 'B'
	,'SWHOIS': 'BA'
	,'SVSO': 'BB'
	,'SVSFLINE': 'BC'
	,'TKL': 'BD'
	,'VHOST': 'BE'
	,'BOTMOTD': 'BF'
	,'HTM': 'BH'
	,'DCCDENY': 'BI'
	,'UNDCCDENY': 'BJ'
	,'CHGNAME': 'BK'
	,'SHUN': 'BL'
	,'CYCLE': 'BP'
	,'MODULE': 'BQ'
	,'SVSNLINE': 'BR'
	,'SVSPART': 'BT'
	,'SVSLUSERS': 'BU'
	,'SVSSNO': 'BV'
	,'SVS2SNO': 'BW'
	,'SVSJOIN': 'BX'
	,'SVSSILENCE': 'Bs'
	,'SVSWATCH': 'Bw'
	,'JOIN': 'C'
	,'PART': 'D'
	,'LUSERS': 'E'
	,'EOS': 'ES'
	,'MOTD': 'F'
	,'MODE': 'G'
	,'KICK': 'H'
	,'REHASH': 'O'
	,'RESTART': 'P'
	,'CLOSE': 'Q'
	,'SENDSNO': 'Ss'
	,'DNS': 'T'
	,'TEMPSHUN': 'Tz'
	,'SILENCE': 'U'
	,'AKILL': 'V'
	,'UNKLINE': 'X'
	,'RAKILL': 'Y'
	,'GLOBOPS': ']'
	,'LOCOPS': '^'
	,'PROTOCTL': '_'
	,'WATCH': '`'
	,'TRACE': 'b'
	,'SQLINE': 'c'
	,'UNSQLINE': 'd'
	,'SVSNICK': 'e'
	,'SVSNOOP': 'f'
	,'SVSKILL': 'h'
	,'SVSMODE': 'n'
	,'SAMODE': 'o'
	,'CHATOPS': 'p'
	,'UNZLINE': 'r'
	,'RULES': 't'
	,'MAP': 'u'
	,'SVS2MODE': 'v'
	,'DALINFO': 'w'
	,'ADMINCHAT': 'x'
	,'UMODE2': '|'
	,'SJOIN': '~'
};

module.exports = tokens;