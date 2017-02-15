var app = angular.module("app.whyilove", ["ngRoute"]);
app.config(function($routeProvider) {
    $routeProvider.when("/whyilove", {
        templateUrl : "./JS/Views/WhyILove/whyilove.html",
        controller: "whyiloveCtrl"
    })
})
app.controller("whyiloveCtrl", function($scope) {
})