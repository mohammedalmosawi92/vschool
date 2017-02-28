var gridArr = [];
var grid = function() {
    var result = "";
    for(var i = 0; i < 10; i++) {
        gridArr[i] = [];
        for(var j = 0; j < 10; j++) {
            gridArr[i][j] = "-";
            result += "-" + " ";
        }
        result += "\n"
    }
    return result
}

grid()
module.exports = gridArr