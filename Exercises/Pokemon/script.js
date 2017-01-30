var arr = [0, 1];
var num = 0;
for(var i = arr.length; num < 4000000;i++) {
    var num = arr[i-2] + arr[i-1]
    arr[i] = num
}
var even = [];
for(var j = 0; j < arr.length; j++) {
    if(arr[j] % 2 == 0) {
      even.push(arr[j])
    }
}
console.log(even.reduce(function(a,b) {
    return a + b
}))