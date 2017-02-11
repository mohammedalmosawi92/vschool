var app = angular.module("app", []);
app.service("dataService", function($http) {
    this.getData = function() {
        return $http.get("http://api.vschool.io:6543/hitlist.json")
    }
})
app.controller("ctrl", function($scope, dataService) {
    $scope.lists = [];
    $scope.loadData = function() {
        dataService.getData().then(function(response) {
            $scope.lists = response.data
        })
    }
})