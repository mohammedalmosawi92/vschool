var readlineSync = require('readline-sync');
var randomNumber = function (min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}
var playerCount = 0;
var pcCount = 0;
while (playerCount < 3 && pcCount < 3) {
    var userMove = readlineSync.question("choose between rock, paper and scissors ");
    if(userMove != "rock" && userMove != "paper" && userMove != "scissors") {
        var userMove = readlineSync.question("what do you want ");
    }
    var pcChance = ["rock", "paper", "scissors"];
    var pc = pcChance[randomNumber(0, 2)];
    console.log("The PC move is " + pc);
    if (userMove == pc) {
        console.log("it's a tie");
    } else if (userMove == "rock" && pc == "paper") {
        console.log("The PC won");
        pcCount++;
        console.log("The Pc points = " + pcCount);
        console.log("The player points = " + playerCount);
    } else if (userMove == "rock" && pc == "scissors") {
        console.log("The player won");
        playerCount++;
        console.log("The Pc points = " + pcCount);
        console.log("The player points = " + playerCount);
    } else if (userMove == "paper" && pc == "rock") {
        console.log("The player won");
        playerCount++;
        console.log("The Pc points = " + pcCount);
        console.log("The player points = " + playerCount);
    } else if (userMove == "paper" && pc == "scissors") {
        console.log("The PC won");
        pcCount++;
        console.log("The Pc points = " + pcCount);
        console.log("The player points = " + playerCount);
    } else if (userMove == "scissors" && pc == "paper") {
        console.log("The player won");
        playerCount++;
        console.log("The Pc points = " + pcCount);
        console.log("The player points = " + playerCount);
    } else if (userMove == "scissors" && pc == "rock") {
        console.log("The PC won");
        pcCount++;
        console.log("The Pc points = " + pcCount);
        console.log("The player points = " + playerCount);
    }
}
if(playerCount == 3) {
    console.log("The player won the match")
}else if(pcCount == 3) {
    console.log("The PC won the match")
}