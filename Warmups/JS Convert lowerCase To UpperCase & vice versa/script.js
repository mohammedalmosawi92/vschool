var antiCaps = function(str) {
    var i;
    var word = "";
    for(i = 0; i < str.length; i++){
        if(isCaps(str[i]) == true) {
          word += str[i].toLowerCase();
        } else {
            word += str[i].toUpperCase();
        }
    }
    return word;
}
function isCaps(letter) {
        return letter === letter.toUpperCase();
}
console.log("bArCElOna");
console.log(antiCaps("bArCElOna"));