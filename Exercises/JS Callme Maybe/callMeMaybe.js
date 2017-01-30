var names = ["Anna", "Bill", "Charlay", "Dexter", "Emily", "Frank", "George", "Hal", "Isaac", "Jill"];
var letter = 0;
var aLetter = 1;
var attempCall = function(name,call,dontCall,sendText){
    for(var i = 0; i < name.length; i++) {
        for(var j = 0; j <name[i].length ;j++ ) {
            if(name[i][j] == "a" || name[i][j] == "A") {
                letter++;
                if(letter > aLetter) {
                   sendText(name[i]); 
                }
            }
        }
        
         if(name[i].length % 2 == 0 && letter < aLetter) {
            call(name[i]);
        } else if(name[i].length % 2 !== 0 && letter < aLetter) {
            dontCall(name[i]);
        } 
        letter = 0;
    }
}
function call(name) {
    console.log("You Called " + name);
    }
    function dontCall(name) {
       console.log("You didn't call " + name); 
    }
    function sendText(name) {
        console.log("You texted " + name);
    }
attempCall(names,call,dontCall,sendText);
