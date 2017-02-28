var readlineSync = require("readline-sync");
var arr = require("./location");
var x = readlineSync.question('x: ');
var y = readlineSync.question('x: ');
console.log(arr[x][y])