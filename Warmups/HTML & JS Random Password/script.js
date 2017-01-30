var lowerCase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","r","p","q","s","t","u","v","x","w","y","z"];
var upperCase = ["A","B","C","D","E","F","G","H","I","J","k","L","M","N","O","R","P","Q","S","T","U","C","W","X","Y","Z"];
var symbols = ["*","$","#","|","-","\\",";","!"];
var numbers = [0,1,2,3,4,5,6,7,8,9]
var random = function(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}
$("#press").click(function() {
    var str="";
    var generatorPassword = function() {
        str = "";
        for(i= 1; i <=8 ; i++) {
        var randomSeq = [lowerCase[random(0,25)],random(1,9),upperCase[random(0,25)],symbols[random(0,7)]];
        str+=randomSeq[(random(0,3))]
    }
    }
    var lower = 0;
    var upper = 0;
    var symbol = 0;
    var num = 0;
    var checkPassword = function() {
        for(var i = 0; i < str.length; i++) {
            for(var j = 0; j < lowerCase.length; j++) {
                if(str[i] === lowerCase[j]) {
                    lower += 1;
                }
            }
            for(var x = 0; x < lowerCase.length; x++) {
                if(str[i] === upperCase[x]) {
                    upper += 1;
                }
            }
            for(var y = 0; y < symbols.length; y++) {
                if(str[i] === upperCase[y]) {
                    symbol += 1;
                }
            }
            for(var z = 0; z < numbers.length; z++) {
                if(str[i] === upperCase[z]) {
                    num += 1;
                }
            }
        }
       if(lower > 0 && upper > 0 && symbol > 0 && num > 0) {
          $("#pass").val(str) 
       }else {
           generatorPassword()
       }
    }
    
})