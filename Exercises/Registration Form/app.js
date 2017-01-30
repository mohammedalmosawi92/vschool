var readlineSync = require("readline-sync");
var firstName = readlineSync.question('May I have your first name? ');
console.log(firstName.toLocaleUpperCase());
console.log(firstName.length);
var lastName = readlineSync.question('May I have your last name? ');
console.log(firstName.concat(" " + lastName));
var message = readlineSync.question('Tell me something about you ');
if(message.length > 20) {
    var spl = (message.slice(message.length / 2,message.length));
}
console.log(spl);
var type = readlineSync.question(' where do you typing to start? ');
console.log(message.substring(type));