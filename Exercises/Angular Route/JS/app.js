var app = angular.module("app", ["ngRoute","app.home","app.about","app.whyilove"]);
app.config(function($locationProvider,$routeProvider) {
    $locationProvider.hashPrefix('');
    $routeProvider.when("/home", {
        templateUrl : "./JS/Views/Home/home.html",
        controller: "homeCtrl"
    }).otherwise("/home",{
        redirectTo : "./JS/Views/Home/home.html",
        controller: "homeCtrl"
    })
})

app.controller("homeCtrl", function($scope) {
    $scope.msg = "BARCELONA"
})