var app = angular.module("authModule", []);

app.service("tokenService", function($location) {
    var userToken = "token"
    this.setToken = function(token) {
        localStorage[userToken] = token
    };
    this.getToken = function() {
        return localStorage[userToken]
    }
    this.removeToken = function() {
        localStorage.removeItem(userToken)
        $location.path("/signin");
    }
})

app.service("authService", function($http, tokenService) {
    this.signUp = function(data) {
        return $http.post("http://localhost:8080/signup/", data);
    }
    this.signIn = function(data) {
        return $http.post("http://localhost:8080/signin/", data).then(function(response){
            tokenService.setToken(response.data.token);
            return response
        });
    }
    this.isAuthenticated = function () {
        return tokenService.getToken();
    };
})