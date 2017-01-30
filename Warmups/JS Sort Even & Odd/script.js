var arrEven = [];
var createEvenArray = function(hightestNum) {
    for(var i = 2; i <= hightestNum ; i++){
        if(i % 2 == 0) {
            arrEven.push(i);
        }
    }
}
var add0adds = function(hightestNum) {
    for(i = 2 ; i <= hightestNum + 1; i++) {
        if(i % 2 != 0) {
            arrEven.push(i)
        }
    }
}
createEvenArray(10);
add0adds(10);
console.log(arrEven.sort(function(a,b) {
    return a - b;
}));