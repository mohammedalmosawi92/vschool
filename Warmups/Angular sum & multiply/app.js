var app = angular.module("app", []);
app.controller("firstCtrl",function($scope) {
    $scope.numberSum = 0;
    $scope.sum = function() {
        $scope.numberSum = $scope.firstNum + $scope.secondNum
    }
    ;
})
app.controller("secondCtrl",function($scope) {
    $scope.multi = function() {
        $scope.numberMulti = $scope.firstNum * $scope.secondNum
    }
})