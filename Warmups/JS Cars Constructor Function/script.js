var arr = [];
function Cars(color, model, miles) {
    this.color = color;
    this.model = model;
    this.miles = miles;
    this.run = function() {
        console.log("color : " + this.color + ", model: " + this.model + ", miles: " + this.miles + ", is running")
    };
};
arr[0] = new Cars("blue",2010,50000);
arr[1] = new Cars("red",2005,250000);
arr[2] = new Cars("green",1999,32000);
for(var i = 0; i < 3; i++) {
    arr[i].run();
}