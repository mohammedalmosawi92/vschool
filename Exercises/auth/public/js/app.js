var app = angular.module("app", ["apiModule", "app.home", "app.signin", "app.signup", "authModule"]);

app.config(function ($locationProvider, $routeProvider) {
    $locationProvider.hashPrefix("");
    $routeProvider.when("/", {
        redirectTo: "/signin"
    }).otherwise({
        redirectTo: "/signin"
    })
});


app.service("AuthInterceptor", ["$q", "$location", "tokenService", function ($q, $location, TokenService) {
    this.request = function (config) {
        var token = TokenService.getToken();
        if (token) {
            config.headers = config.headers || {};
            config.headers.Authorization = "Bearer " + token;
        }
        return config;
    };

    this.responseError = function (response) {
        if (response.status === 401) {
            TokenService.removeToken();
            $location.path("/login");
        }
        return $q.reject(response);
    };
}]);

app.config(["$httpProvider", function ($httpProvider) {
    $httpProvider.interceptors.push("AuthInterceptor");
}]);

app.controller("ctrl", function ($scope, tokenService, authService) {
    if (authService.isAuthenticated()) {
        $scope.showlogOut = true
    } else {
        $scope.showlogOut = false
    }
    $scope.signout = function () {
        tokenService.removeToken()
        $scope.showlogOut = false
    }
})