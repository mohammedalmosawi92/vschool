var app = angular.module("app.signin", ["ngRoute", "authModule", "apiModule"]);
app.config(function ($routeProvider) {
    $routeProvider.when("/signin", {
        templateUrl: "/view/signin.tpl.html",
        controller: "signinCtrl"
    })
})

app.controller("signinCtrl", function ($scope, authService, $location) {
    $scope.user = {};
    $scope.signin = function () {
        var data = {
            username: $scope.user.username,
            password: $scope.user.password
        }
        console.log(data)
        authService.signIn(data).then(function (response) {
            $scope.showlogOut = false
            $location.path('/home');
        }, function (response) {
            alert("this username or password does not exist");
        })
        $scope.user = {};
    }
})