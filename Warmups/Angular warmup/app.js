var app = angular.module("app",[]);
app.service("firstService",function() {
    this.names = [];
    this.addName = function(name) {
      this.names.push(name)
    }
    this.removeName = function(index) {
        this.names.splice(index,1)
    }
})
app.controller("ctrl",function($scope,firstService) {
    $scope.submit = function() {
        firstService.addName($scope.name);
        $scope.names = firstService.names
    }
    $scope.remove = function(index) {
        firstService.removeName(index)
        $scope.names = firstService.names
    }
})