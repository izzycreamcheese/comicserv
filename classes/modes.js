var Modes = function(modes) {
	if (modes) {
		this.modify(modes);
	}
};

Modes.prototype = {
	modes: {}
};

Modes.prototype.add = function(mode) {
	this.modes[mode] = true;
};

Modes.prototype.remove = function(mode) {
	if (this.modes[mode]) {
		delete this.Modes[mode];
	}
};

Modes.prototype.contains = function(mode) {
	return !!this.modes[mode];
};

Modes.prototype.modify = function(mode_string) {
	var adding = false;

	for (var i=0; i<mode_string.length; i++) {
		var mode = mode_string[i];

		if (mode == '+') {
			adding = true;
		} else if (mode == '-') {
			adding = false;
		} else if (adding) {
			this.add(mode);
		} else {
			this.remove(mode);
		}
	}
};

Modes.prototype.toString = function() {
	var s = '+';

	Object.keys(this.modes).forEach(function(mode) {
		s += mode;
	});

	return s;
};

module.exports = Modes;