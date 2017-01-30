var readlineSync = require('readline-sync');
var words = readlineSync.question("give me a sentence ");
var words = words.toLocaleLowerCase();
var noRepeatedLetters = "";
for(var i = 0; i < words.length; i++) {
    if(noRepeatedLetters.indexOf(words[i]) == -1 ) {
        noRepeatedLetters += words[i];
    }
}
console.log("without duplicated letters " + noRepeatedLetters);
for(var i = 0; i < noRepeatedLetters.length; i++) {
    var letterRepeat = 0;
    for(var j = 0; j < words.length; j++) {
        if(noRepeatedLetters[i] == words[j]) {
           letterRepeat++ 
        }
    }
    console.log(noRepeatedLetters[i] + " : " + letterRepeat);
}