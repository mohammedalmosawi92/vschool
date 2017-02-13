var palindrome = function(str) {
    var newStr = ""
    for(var i = 0; i < str.length; i++) {
        if(str[i].match(/[a-z]/i)) {
            newStr += str[i].toLocaleLowerCase();
        }
    }
    console.log(newStr);
    var notPal = 0;
    for(var x = 0, j = newStr.length - 1; x <= newStr.length / 2 , j >= newStr.length / 2; x++,j--) {
        if(newStr[x] != newStr[j]) {
            notPal++
        }
    }
    if(notPal == 0) {
        console.log("it a palindrome")
    }
}
palindrome("dStar Ratsd!");