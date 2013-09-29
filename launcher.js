TRON.LAUNCHER = function(nes) {

	this.map = new TRON.MAP();
    this.keyboard = new TRON.KEYBOARD();
    this.player = new TRON.PLAYER();
    
    
};

TRON.LAUNCHER.prototype = {
    
    init: function() {

    	this.map.init();
	    this.player.init();
	    /*this.ingine.init();*/

    	this.start();
    },
    
    
    start: function(){

	    this.map.render();
    }
};