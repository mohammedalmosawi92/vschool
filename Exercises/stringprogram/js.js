var readlineSync = require('readline-sync');
var num1 = readlineSync.question("enter first number ");
var num2 = readlineSync.question("enter second number ");
var num3 = readlineSync.question("enter third number ");
var arr = [];
arr.push(num1);
arr.push(num2);
arr.push(num3);
var number = function(num) {
    console.log(num.sort(function(a,b) {
       return a - b;
    }))
};
number(arr);