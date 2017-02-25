var app = angular.module("app", ["ngRoute"]);
app.config(function($locationProvider,$routeProvider) {
    $locationProvider.hashPrefix('');
    $routeProvider.when("/", {
        redirectTo : ""
    }).otherwise("/",{
        redirectTo : "",
    })
})