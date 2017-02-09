var arr = [1,2,3];
var arrTwo = ["a","b","c","d"];
var combine = function(first,second) {
    var combineArr = [];
    for(var i = 0; i < first.length; i++) {
        combineArr.push(first[i]);
        for(var j = i ; j < second.length;) {
            combineArr.push(second[j])
            break
        }
    }
    console.log(combineArr)
}
combine(arr,arrTwo)