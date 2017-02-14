var app = angular.module("app", ["myStore"]);

app.controller("ctrl", function($scope, myStore) {
    $scope.itemList = myStore.list;
    $scope.total = myStore.total;
    $scope.add = function() {
        myStore.addItem($scope.name, $scope.cost);
        $scope.total = myStore.total;
        $scope.name = "";
        $scope.cost = "";
    }
})