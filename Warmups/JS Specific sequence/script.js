var findCoe = function(word) {
    var count = 0;
    var wordLowerCase = word.toLocaleLowerCase()
    for(var i = 0; i < wordLowerCase.length; i++) {
        if(wordLowerCase[i] === "c" && wordLowerCase[i+1] === "o" && wordLowerCase[i+3] === "e") {
            count++;
            i += 3;
        }
    }
    return count;
}
//console.log("aaacodebbb ="+findCoe("aaacodebbb"));
//console.log("cooecode ="+findCoe("cooecodec"));
console.log("CodeCoeecoae = "+findCoe("CodeCojeCoae"));