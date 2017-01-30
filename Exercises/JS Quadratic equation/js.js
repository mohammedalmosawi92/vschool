var equa = function(a, b, c) {
    var delta = b * b - 4 * a * c;
    var x1;
    var x2;
    if(delta == 0) {
        console.log(x1 = (-b) / (2 * a));
    } else if(delta > 0) {
        console.log(x1 = (-b + Math.sqrt(delta)) / (2 * a));
        console.log(x2 = (-b - Math.sqrt(delta)) / (2 * a));
    } else {
        return "no solution"
    }
}
equa(2,5,2)