/*var print = function() {
    var arr = ["Hello", "World", "in", "a", "frame"];
    for()
}
print()*/
var board = [["","","","","","","",""],["","","","","","","",""],["","","","","","","",""],["","","","","","","",""],["","","","","","","",""],["","","","","","","",""],["","","","","","","",""],["","","","","","","",""]];
var num = [1,2,3,4,5,6,7,8];
var alpha = ["a","b","c","d","e","f","g","h"];
var chess = function() {
    var queen = "queen";
    for(var i = 0; i < num.length; i++) {
        for(var j = 0; j < alpha.length; j++) {
            if(board[i].indexOf("queen") == -1) {
                if(board[i][j+1] != "queen" && board[i][j-1] != "quenn" &&board[i+1][j] != "quenn" && board[i-1][j] != "queen" && board[i-1][j+1] != "queen" && board[i-1][j-1] != "queen" && board[i+1][j+1] != "queen" && board[i+1][j-1] != "queen") {
                    board[i][j].push(queen);
                    break;
                }
            }
        }
    }
    console.log(board)
}
chess();