var app = angular.module("app",[]);
app.service("likeService", function() {
    this.likeOne = 0;
    this.likeOneUp = function() {
        this.likeOne++
    }
    this.likeTwo = 0;
    this.likeTwoUp = function() {
        this.likeTwo++
    }
})
app.controller("ctrl", function($scope,likeService) {
    $scope.likeOne = likeService.likeOne;
    $scope.likeTwo = likeService.likeTwo;
    $scope.likeOneClick = function() {
        likeService.likeOneUp();
        $scope.likeOne = likeService.likeOne;
    }
    $scope.likeTwoClick = function() {
        likeService.likeTwoUp();
        $scope.likeTwo = likeService.likeTwo;
    }
})