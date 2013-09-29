TRON.MAP = function(nes) {
    
    var maxX = 160;
    var maxY = 120;


    this.mapMatrix = new Array(maxX);
    this.canvas = document.getElementById("canvas");
    this.context = canvas.getContext("2d");
    this.canvas.width  = 800;
    this.canvas.height = 600;
           
    for (var i = 0; i < this.mapMatrix.length; i++) {
        this.mapMatrix[i] = new Array(maxY);
    };

    

};

TRON.MAP.prototype = {

    init: function(x1, y1, x2, y2) {
        
        for (var i = this.mapMatrix.length - 1; i >= 0; i--) {
            for (var j = this.mapMatrix[i].length - 1; j >= 0; j--) {
                this.mapMatrix[i][j] = 0;
                this.context.fillStyle = "rgb(0,0,0)";
                this.context.fillRect(i*5, j*5, 5, 5);
            };
            
        };
        this.mapMatrix[x1][y1] = 1;
        this.mapMatrix[x2][y2] = 2;

        this.context.fillStyle = "rgb(0,0,255)";
        this.context.fillRect(x1*5, y1*5, 5, 5);
        this.context.fillStyle = "rgb(255,255,0)";
        this.context.fillRect(x2*5, y2*5, 5, 5);
    },

    render: function(x, y){

        switch(this.mapMatrix[x][y]){
            case 0:
                this.context.fillStyle = "rgb(0,0,0)";
            break;

            case 1:
                this.context.fillStyle = "rgb(0,0,255)";
            break;

            case 2:
                this.context.fillStyle = "rgb(255,255,0)";
            break;

            case 3:
                this.context.fillStyle = "rgb(0,0,150)";
            break;

            case 4:
                this.context.fillStyle = "rgb(150,150,0)";
            break;

            case 5:
                this.context.fillStyle = "rgb(255,0,0)";
            break;
        }
        this.context.fillRect(x*5, y*5, 5, 5);
    },

    showWin: function(winner){
        this.context.font="30px Verdana";
        this.context.fillStyle = "rgb(0,0,0)";
        this.context.fillRect(220, 235, 300, 100);
        if(winner === "TRON has won!"){
            this.context.fillStyle = "rgb(0,0,255)";
        }else{
            this.context.fillStyle = "rgb(150,150,0)";
        }
        this.context.fillText(winner,250,300);
    }
};

