TRON.PLAYER = function(nes) {
    this.X = 0;
    this.Y = 0;
};

TRON.PLAYER.prototype = {
    
    init: function(x, y) {

    	this.X = x;
    	this.Y = y;
    },

    getPosition: function(){

    	var position = [];
    	position.push(this.X);
    	position.push(this.Y);

    	return position;
    },
    
    
    goUp: function(){
    	
    	this.X --;

        return this.X;
    } ,
    goRight: function(){

        this.Y ++;

        return this.Y;
    } ,
    goDown: function(){

    	this.X ++;

        return this.X;
    } ,
    goLeft: function(){

		this.Y --;

        return this.Y;
    } 
};