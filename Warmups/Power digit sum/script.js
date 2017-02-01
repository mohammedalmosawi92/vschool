var num = Math.pow(2,1000);
var reconstruct = [];
while(num > 0) {
    reconstruct.unshift(num % 10);
    num = Math.floor(num / 10);
}
var sum = 0;
for(var i = 0; i < reconstruct.length; i++) {
    sum += reconstruct[i]
}
console.log(sum)