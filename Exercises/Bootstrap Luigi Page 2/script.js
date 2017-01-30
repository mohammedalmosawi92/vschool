var arr = [];
var omega = '\u03A9';
var alpha = '\u03B1';
var i;
var j;
for(i = 0; i <= 10; i++) {
    arr[i] = [];
    for(j = 0; j <= 10; j++) {
        if(j % 2                                                                      == 0) {
            arr[i].push(alpha);
        } else {
            arr[i].push(omega);
        }
    }
    console.log(arr[i].join(" "));
};