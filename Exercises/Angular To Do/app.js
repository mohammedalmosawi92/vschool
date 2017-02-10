var app = angular.module("app",[]);
app.service("todoService", function($http) {
    this.getData = function() {
        
        return $http.get("http://api.vschool.io/mohammedaziz/todo/")
    }
    this.addData = function(data) {
        return $http.post("http://api.vschool.io/mohammedaziz/todo/",data)
    }
    this.deleteData = function(id) {
        return $http.delete("http://api.vschool.io/mohammedaziz/todo/"+id)
    }
    this.updateData = function(id,data) {
        return $http.put("http://api.vschool.io/mohammedaziz/todo/"+id,data)
    }
})
app.controller("ctrl", function($scope,todoService) {
    $scope.items = [];
    $scope.editInput = {};
    $scope.dataupdateButton = {};
    $scope.loadData = function() {
        todoService.getData().then(function(response) {
            $scope.items = response.data;
            for(var i = 0; i < $scope.items.length;i++) {
                $scope.dataupdateButton[i] = true;
            }
        })
    }
    $scope.add = function() {
        var data = {
            title: $scope.text,
        }
        todoService.addData(data).then($scope.loadData,function(repsonse) {
            console.log(repsonse.status)
        })
        $scope.text = "";
    }
    $scope.delete = function(id) {
        todoService.deleteData(id).then($scope.loadData,function(repsonse) {
            console.log(repsonse.status)
        })
    }
    $scope.updated = function(id,index) {
        $scope.editInput[id] = true;
        $scope.dataupdateButton[index] = false;
    }
    $scope.addUpdate = function(id,inp,index) {
        var newdata = {
            title: inp,
        }
        console.log(id,newdata)
        todoService.updateData(id,newdata).then($scope.loadData,function(repsonse) {
            console.log(repsonse.status)
        })
        $scope.editInput[id] = false;
        $scope.dataupdateButton[index] = true;
    }
})