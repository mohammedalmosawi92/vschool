var x = {
    name: "mohammed",
    Age : 23,
    isAlive: true,
    funct: function () {},
    fav: ["barca", 10, "messi"],
};
var x = [20, 30, 10, 50];
var mySplit = function(arr) {
    return arr.slice(0,2);
}
console.log(mySplit(x));
var myFill = function(arr1) {
    return arr1.fill("hi",0,2)
}
console.log(myFill(x))
var myIndex = function(arr2) {
    return arr2.indexOf(50)
}
console.log(myIndex(x));

var myFilter = function(num) {
    return num.filter(function(num1) {
        return num1 > 10;
    })
}
console.log(myFilter(x));