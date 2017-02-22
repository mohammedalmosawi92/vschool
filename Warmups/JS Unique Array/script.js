var uniqueArray = function(firstArr,secondArr) {
    console.log(arguments.length)
    var arr = [];
    for(var i = 0; i < firstArr.length; i++) {
        var noRepeat = 0;
        for(var j = 0; j < secondArr.length; j++) {
            if(firstArr[i] == secondArr[j]) {
                noRepeat++;
            }
        }
        if(noRepeat == 0) {
           arr.push(firstArr[i]) 
        }
    }
    for(var i = 0; i < secondArr.length; i++) {
        var noRepeat = 0;
        for(var j = 0; j < firstArr.length; j++) {
            if(secondArr[i] == firstArr[j]) {
                noRepeat++;
            }
        }
        if(noRepeat == 0) {
           arr.push(secondArr[i]) 
        }
    }
    console.log(arr)
}

var unique = function(firstArr,secondArr,thirdArr) {
    var concatArr = [];
    for(var i = 0; i < arguments.length; i++) {
        concatArr = concatArr.concat(arguments[i]);
    }
    var numofArray = 0;
   (while numofArray < arguments.length) {
       
   }
    var arr = [];
    for(var i = 0; i < concatArr.length; i++) {
        var noRe = 0;
        for(var j = i+1; j < concatArr.length; j++) {
            if(concatArr[i] == concatArr[j]) {
                noRe++;
            }
        }
        if(noRe == 0) {
           arr.push(concatArr[i])
        }
    }
    console.log(arr)
}

var arr1 = [1,2,3,4,5];
var arr2 = [3,4,5,6,7];
var arr3= [9,10]
unique(arr1,arr2,arr3)
//uniqueArray(arr1,arr2)