var romanNumerals = function(num) {
    var roman = ["","I","II","III","IV","V","VI","VII","VIII","IX","X"]
    var str = String(num);
    var multiNum = [];
    
    for(i = 0; i < str.length; i++) {
    }
    var romanNum = [];
    for(var i = 0; i < str.length; i++) {
        for(var j = 0; j < roman.length; j++) {
            if(str[i] == roman.indexOf(roman[j])) {
                romanNum.push(roman[j]);
            }
        }
    }
    console.log(romanNum)
}
romanNumerals(7);