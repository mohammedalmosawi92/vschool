var app = angular.module("app", []);
var config = {  
    headers: {
        'X-Mashape-Key': 'ydoXoQrHFfmsh6N8IE3C6r1Osz8ep1MAkh2jsnZZX99BCTLHAm'
    }
};
app.service("getService", function ($http) {
    this.getData = function (words) {
        return $http.get("https://yoda.p.mashape.com/yoda?sentence=" + words, config)
    }
})
app.controller("ctrl", function ($scope, getService) {
    $scope.translate = function () {
        getService.getData($scope.words).then(function (response) {
            $scope.translatedWords = response.data
        }, function (response) {
            console.log(response.status)
        })
    }
})