var factorial = function(num) {
    var sum = 1;
    var numsq = "";
    for(var i = num; i > 0; i--) {
        numsq += i;
        if(i != 1) {
            numsq += " * ";
        }
        sum *= i;
    }
    console.log(numsq + " = " + sum)
}
factorial(5);