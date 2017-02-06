var app = angular.module("app",[]);
app.service("myService",function() {
    this.todoList = [];
    this.add = function(todo) {
        this.todoList.push(todo);
    }
    this.remove = function(index) {
        this.todoList.splice(index,1)
    }
})
app.controller("ctrl",function($scope,myService) {
    $scope.addList = function() {
        myService.add($scope.listName);
        $scope.listName = "";
    }
    $scope.remove = function(index) {
        myService.remove(index);
    }
    $scope.lists = myService.todoList;
})