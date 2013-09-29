TRON.KEYBOARD = function() {

	var keys = this.keys = {
		'backspace': 	8,
		'tab': 			9,
		'enter': 		13,
		'escape':		27,
		'end':			35,
		'home':			36,
		'left_arrow':	37,
		'up_arrow':	 	38,
		'right_arrow':	39,
		'down_arrow': 	40,
		'0':			48,
		'1':			49,
		'2':			50,
		'3':			51,
		'4':			52,
		'5':			53,
		'6':			54,
		'7':			55,
		'8':			56,
		'9':			57,
		'a':			65,
		'b':			66,
		'c':			67,
		'd':			68,
		'e':			69,
		'f':			70,
		'g':			71,
		'h':			72,
		'i':			73,
		'j':			74,
		'k':			75,
		'l':			76,
		'm':			77,
		'n':			78,
		'o':			79,
		'p':			80,
		'q':			81,
		'r':			82,
		's':			83,
		't':			84,
		'u':			85,
		'v':			86,
		'w':			87,
		'x':			88,
		'y':			89,
		'z':			90
	};

	this.keyArray = [];

	var keyEvent = function(state, keyCode) {
		var e = $.Event(state);
		e.which = keyCode;
		return e;
	}

	this.setKeyState = function(keyName, isPressed) {
		if (isPressed) {
			$(document).trigger(keyEvent("keydown", keys[keyName]));
		} else {
			$(document).trigger(keyEvent("keyup", keys[keyName]));
		}
	};
};

TRON.KEYBOARD.prototype = {
    
    init: function() {
   	
    },
    
    
    start: function(){

    },

    addKey: function(key){
    	this.keyArray.push(key);
    },

    getKeys: function(){
    	return this.keyArray;
    },
    subscribe: function(keyName, callback) {
    	var self= this;
		$(document).on("keyup", function(evt) {
			if (evt.which === self.keys[keyName]) {
				callback();
			};
		});
	}
};

