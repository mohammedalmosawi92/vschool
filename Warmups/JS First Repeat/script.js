var firstNonRepeatedLetters = function(str) {
    var noRepeatedStr = "";
    for(var i = 0; i < str.length; i++) {
        var numOfRepeat = 0;
        for(var j = 0; j < str.length; j++) {
            if(str[i] == str[j]) {
                numOfRepeat++;
            }
        }
        if(numOfRepeat == 1) {
            noRepeatedStr += str[i];
        }
    }
    if(noRepeatedStr.length == 0) {
        console.log("There is no non-repeated letters")
    }else {
       console.log(noRepeatedStr[0]) 
    }
}
firstNonRepeatedLetters("jjjjjja");