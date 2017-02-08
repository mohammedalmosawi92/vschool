var app = angular.module("myApp", []);

app.service("BlueService", function () {
    this.blueScore = 10;
    this.blueIncrease = function () {
        this.blueScore++;
    }
    this.blueDecrease = function () {
        this.blueScore--;
    }
    this.reset = function() {
        this.blueScore = 100;
    }
})

app.service("RedService", function () {
    this.redScore = 10;
    this.redDecrease = function () {
        this.redScore--;
    }
    this.redIncrease = function () {
        this.redScore++
    }
    this.reset = function() {
        this.redScore = 100;
    }
})

app.controller("ctrl", function ($scope, BlueService, RedService) {
    $scope.blueScore = BlueService.blueScore;
    $scope.redScore = RedService.redScore;
    
    $scope.blueClick = function () {
        BlueService.blueIncrease();
        RedService.redDecrease();
        if($scope.redScore == 1) {
        RedService.reset();
        }
        $scope.blueScore = BlueService.blueScore;
        $scope.redScore = RedService.redScore;
    }
    
    $scope.redClick = function () {
        BlueService.blueDecrease();
        RedService.redIncrease();
        if($scope.blueScore == 1) {
        BlueService.reset();
        }
        $scope.blueScore = BlueService.blueScore;
        $scope.redScore = RedService.redScore;
    }
    
})