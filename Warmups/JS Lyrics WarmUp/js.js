var lyrics = ["This", "hit", "that", "ice", "cold","Michelle", "Pfeiffer", "that", "white","gold", "This", "one", "for", "them","hood", "girls", "Them", "good", "girls",    "straight", "masterpieces", "Stylin'","whilen'", "livin'", "it", "up", "in","the", "city", "Got", "Chucks", "on","with", "Saint", "Laurent", "Gotta", "kiss","myself", "I'm", "so", "pretty"];
var printArray = function (word1) {
    var print = ""
    for(i = 0; i < word1.length; i++) {
        print += word1[i] + " ";
    }
    console.log(print)
}
printArray(lyrics);
var backward = function (word2) {
    var print2 = "";
    for(i = word2.length - 1; i >= 0; i--) {
        print2 += word2[i] + " ";
    }
    console.log(print2);
}
backward(lyrics);
var everyOther = function (word) {
    var printEveryOther = "";
    for(i = 0; i < word.length; i += 2) {
        printEveryOther += word[i] + " ";
    }
    console.log(printEveryOther)
}
everyOther(lyrics)
var reverse = function(word) {
    printReverse = "";
    for(i = 0; i < word.length; i += 2) {
    printReverse += word[i + 1] + " " + word[i] + " " 
    }
    console.log(printReverse)
}
reverse(lyrics)