var app =angular.module("app", []);

app.service("myService", function($http) {
    this.getData = function() {
        return $http.get("http://localhost:8080/menu/")
    }
    this.postData = function(data) {
        return $http.post("http://localhost:8080/menu/", data)
    }
    this.deleteData = function(id) {
        return $http.delete("http://localhost:8080/menu/" + id)
    }
})

app.controller("ctrl", function($scope, myService) {
    $scope.loadData = function() {
        myService.getData().then(function(response){
            $scope.menuList = response.data.data
        },function(response){
            console.log(response.status)
        })
    }
    $scope.add = function() {
        var data = {
            name: $scope.name,
            cost: $scope.cost,
            type: $scope.type
        }
        myService.postData(data).then($scope.loadData)
    }
    $scope.del = function(id) {
        myService.deleteData(id).then($scope.loadData)
    }
})