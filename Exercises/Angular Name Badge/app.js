var app = angular.module("app", []);
app.controller("mainController", function ($scope) {
    $scope.submited = false;
    $scope.submit = function() {
        $scope.submited = true;
    }
}