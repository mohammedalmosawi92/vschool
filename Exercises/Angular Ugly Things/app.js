var app = angular.module("myApp", []);
app.service("myService", function () {
    if(JSON.parse(localStorage.getItem("imagesArr"))) {
        this.imagesArr = JSON.parse(localStorage.getItem("imagesArr"));
    }else {
       this.imagesArr = []; 
    }
    this.addImage = function (title, desc, url) {
        this.imagesArr.push({
            imgTitle: title,
            description: desc,
            imageUrl: url
        })
        localStorage.setItem("imagesArr",JSON.stringify(this.imagesArr))
    }
})

app.controller("ctrl", function ($scope, myService, $window) {
    $scope.images = myService.imagesArr;
    $scope.submit = function () {
        myService.addImage($scope.title, $scope.desc, $scope.imageURL);
    }
})