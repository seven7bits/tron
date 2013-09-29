TRON.KEYBOARD = function() {

	this.keys = {
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

	this.setKeyState = function(keyName, isPressed) {
		if (isPressed) {
			console.log(keys[keyName].code);
			$(document).trigger(keyEvent("keydown", keys[keyName].code));
			keys[keyName].isPressed = true;
		} else {
			$(document).trigger(keyEvent("keyup", keys[keyName].code));
			keys[keyName].isPressed = false;
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
	},
	adapter: function(keyName, state) {
		keyName = keyName.toLowerCase();

		var pressKey = (state == 1 ? true : false);

		switch (keyName) {
			case 'left':
				this.setKeyState('left_arrow', pressKey);
				break;
			case 'right':
				this.setKeyState('right_arrow', pressKey);
				break;
			case 'up':
				this.setKeyState('up_arrow', pressKey);
				break;
			case 'down':
				this.setKeyState('down_arrow', pressKey);
				break;
			case 'start':
				this.setKeyState('enter', pressKey);
				break;
			case 'left1':
				this.setKeyState('3', pressKey);
				break;
			case 'right1':
				this.setKeyState('1', pressKey);
				break;
			case 'up1':
				this.setKeyState('0', pressKey);
				break;
			case 'down1':
				this.setKeyState('2', pressKey);
				break;
			case 'start1':
				this.setKeyState('enter', pressKey);
			break;
		};
	}
};

