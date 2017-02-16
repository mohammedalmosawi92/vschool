var app = angular.module("app.home", ["ngRoute"]);
app.config(function($routeProvider) {
    $routeProvider.when("/home", {
        templateUrl : "./JS/Views/Home/home.html",
        controller: "homeCtrl"
    })
})
app.controller("homeCtrl", function($scope) {
    $scope.msg = ""
})