var gridArr = require("./grid");
var Location = function () {
    this.isShip = true;
    this.hit = false;
    this.getHit = function () {
        
    };
}
var getRandomInt = function (min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
var addShip = function () {
    for (var i = 1; i <= 40; i++) {
        var x = getRandomInt(0, 9);
        var y = getRandomInt(0, 9);
        gridArr[x][y] = "ship"
    }
}
addShip();
module.exports = gridArr