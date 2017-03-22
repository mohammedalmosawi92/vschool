var app = angular.module("app", []);
app.controller("ctrl", function ($scope) {
    $scope.grid = [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9]
    ];
    var num = 0;
    $scope.symbolX = [];
    $scope.showX = [];
    $scope.addX = function(index) {
        $scope.showX[index] = true;
        if(num % 2 == 0) {
            $scope.symbolX[index] = "O"
        }else {
            $scope.symbolX[index] = "X"
        }
        num++
    }
})