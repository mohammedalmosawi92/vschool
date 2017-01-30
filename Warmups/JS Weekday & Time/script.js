var date = new Date();
var weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
var n = weekday[date.getDay()];
console.log("Today is : " n);
var time = date.toLocaleTimeString();
console.log(time);