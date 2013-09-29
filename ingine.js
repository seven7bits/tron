TRON.INGINE = function(nes) {

	var self = this;

    self.map = new TRON.MAP();
    self.keyboard = new TRON.KEYBOARD();
    self.player0 = [];
    self.player1 = [];

    

    self.p0 = false;
    self.p1 = false;

    this.timer;

    self.player0.push(0);
    self.player0.push(0);
    self.player1.push(0);
    self.player1.push(0);
    self.animate = function(){

        requestAnimationFrame(self.animate);
        self.map.render(self.player0[0], self.player0[1]);
        self.map.render(self.player1[0], self.player1[1]);
    };
    self.animate();


    self.keyboard.subscribe("enter", function(){
			self.init();
		});

    self.keyboard.subscribe("up_arrow", function(){
    	if(self.player0Dir != 2){
	    	
	    	self.player0Dir = 0;
			self.p0 = true;
			
		};
    });

    self.keyboard.subscribe("right_arrow", function(){
    	if(self.player0Dir != 3){
    	
    	self.player0Dir = 1;
		self.p0 = true;
		};
    });

    self.keyboard.subscribe("down_arrow", function(){
    	if(self.player0Dir != 0){
    	
    	self.player0Dir = 2;
		self.p0 = true;
		};
    });

    self.keyboard.subscribe("left_arrow", function(){
    	if(self.player0Dir != 1){
    	
    	self.player0Dir = 3;
		self.p0 = true;
		};
    });

    self.keyboard.subscribe("1", function(){
    	if(self.player1Dir != 2){
    	self.player1Dir = 0;
		self.p1 = true;
	};
		
    });
    self.keyboard.subscribe("2", function(){
    	if(self.player1Dir != 3){
    	self.player1Dir = 1;
		self.p1 = true;
		};
    });

    self.keyboard.subscribe("3", function(){
    	if(self.player1Dir != 0){
    	self.player1Dir = 2;
		self.p1 = true;
		};
    });

    self.keyboard.subscribe('4', function(){
    	if(self.player1Dir != 1){
    	self.player1Dir = 3;
		self.p1 = true;
		};
    });

    this.checkGame = function(){
    	
    	if(self.player0Dir == 0){
    		self.player0[1]--;
    	}
    	if(self.player0Dir == 1){
    		self.player0[0]++;
    	}
    	if(self.player0Dir == 2){
    		self.player0[1]++;
    	}
    	if(self.player0Dir == 3){
    		self.player0[0]--;
    	}
    	self.p0 = true;

    	if(self.player1Dir == 0){
    		self.player1[1]--;
    	}
    	if(self.player1Dir == 1){
    		self.player1[0]++;
    	}
    	if(self.player1Dir == 2){
    		self.player1[1]++;
    	}
    	if(self.player1Dir == 3){
    		self.player1[0]--;
    	}
    	self.p1 = true;
    	this.check();
   	};


	this.check = function(){
		
		if(self.p0){
			if((self.map.mapMatrix[self.player0[0]][self.player0[1]] != 0) 
				|| (self.player0[0] < 0) 
				|| (self.player0[0] > self.map.mapMatrix[self.player0[0]][self.player0[1]].length)
				|| (self.player0[1] > self.map.mapMatrix[self.player0[0]][self.player0[1]].length)
				|| (self.player0[1] < 0)){
				self.map.mapMatrix[self.player0[0]][self.player0[1]] = 5;
				self.stop("Utilities have won!");
			}else{
				self.map.mapMatrix[self.player0[0]][self.player0[1]] = 1;
			};
			self.p0 = false;
		}

		if(self.p1){
			if((self.map.mapMatrix[self.player1[0]][self.player1[1]] != 0) 
				|| (self.player1[0] < 0) 
				|| (self.player1[0] > self.map.mapMatrix[self.player1[0]][self.player1[1]].length)
				|| (self.player1[1] > self.map.mapMatrix[self.player1[0]][self.player1[1]].length)
				|| (self.player1[1] < 0)){
				self.map.mapMatrix[self.player1[0]][self.player1[1]] = 5;
				self.stop("TRON has won!");
			}else{
				self.map.mapMatrix[self.player1[0]][self.player1[1]] = 2;
			}
			self.p1 = false;
		}
		
		self.map.render(self.player0[0], self.player0[1]);
		self.map.render(self.player1[0], self.player1[1]);
    };
    
};

TRON.INGINE.prototype = {
    init: function() {

	    this.player0[0] = 50;
	    this.player0[1] = 60;

	    this.player1[0] = 100;
	    this.player1[1] = 60;

	    this.map.init(this.player0[0], this.player0[1], this.player1[0], this.player1[1]);

	    this.player0Dir = 1;
    	this.player1Dir = 3;


    	this.start();
    },
    
    
    start: function(){
    	var self = this;
    	this.timer = setInterval(function(){
    		self.checkGame();
    	}, 35);

    	self.keyboard.subscribe("enter", function(){
			
		});
    },

    restart: function(){

    	this.init();
    },

    stop: function(winner){
    	window.clearInterval(this.timer);
    	this.map.showWin(winner);
		    
    }
    
};

