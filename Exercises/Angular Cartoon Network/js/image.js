var image = angular.module("myImages",[])
image.service("myService", function() {
    this.cartoonList = [];
    this.addCatoon = function(cartoon) {
        this.cartoonList.push(cartoon)
    }
})