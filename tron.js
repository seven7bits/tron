var TRON = function() {

    this.ingine = new TRON.INGINE();
};

TRON.prototype = {

    start: function() {

        this.ingine.init();
    }

};