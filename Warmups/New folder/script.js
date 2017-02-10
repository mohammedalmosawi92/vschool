var readlineSync = require('readline-sync');
var dec = {};
var select = readlineSync.question('Do you want to add or search ? ');
while (select != "bye") {
    if (select == "add") {
        var addWord = readlineSync.question("enter a word ");
        var adddec = readlineSync.question("enter a the meaning ");
        var add = function (addWord, addDec) {
            if(!dec[addWord]) {
                dec[addWord] = addDec;
            }else {
                console.log("the word exists")
            }
        }
        add(addWord, adddec)
    } else if (select == "search") {
        var word = readlineSync.question("enter a word ");
        var search = function (str) {
            if (dec[str]) {
                console.log(dec[str])
            }else {
                console.log("this word does not exist")
            }
        }
        search(word);
    }
    var select = readlineSync.question('Do you want to add or search ? ');
}