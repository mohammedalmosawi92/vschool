var readlineSync = require('readline-sync');
var num1 = readlineSync.question("enter first number ");
var num2 = readlineSync.question("enter second number ");
var num3 = readlineSync.question("enter third number ");
if(num1 > num2 && num1 > num3 && num2 > num3) {
    console.log(num1 + " " + num2 + " " + num3);
} else if(num1 > num2 && num1 > num3 && num3 > num2) {
    console.log(num1 + " " + num3 + " " + num2);
} else if(num2 > num1 && num2 > num3 && num1 > num3) {
    console.log(num2 + " " + num1 + " " + num3);
} else if(num2 > num1 && num2 > num3 && num3 > num1) {
    console.log(num2 + " " + num3 + " " + num1);
} else if(num3 > num1 && num3 > num2 && num1 > num2) {
    console.log(num3 + " " + num1 + " " + num2);
} else if(num3 > num1 && num3 > num2 && num2 > num1) {
    console.log(num3 + " " + num2 + " " + num1);
};