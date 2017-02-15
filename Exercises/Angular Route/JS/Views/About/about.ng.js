var app = angular.module("app.about", ["ngRoute"]);
app.config(function($routeProvider) {
    $routeProvider.when("/about", {
        templateUrl : "./JS/Views/About/about.html",
        controller: "aboutCtrl"
    })
})
app.controller("aboutCtrl", function($scope) {
    $scope.msg = 5240550
})