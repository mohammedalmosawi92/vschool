var app = angular.module("app", ["myImages"]);

app.controller("ctrl",function($scope, myService){
    $scope.cartoonList = myService.cartoonList;
    $scope.addCartoon = function() {
        myService.addCatoon({
            title: $scope.imageTitle,
            description: $scope.imageDecs,
            imageURL: $scope.imageURL
        });
        $scope.imageTitle = "";
        $scope.imageDecs = "";
        $scope.imageURL = "";
    }
})