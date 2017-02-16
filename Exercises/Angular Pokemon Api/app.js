var app = angular.module("app", ["pokemon"]);
app.controller("ctrl", function($scope,pokemonService) {
    $scope.name = "";
    $scope.search = function() {
        pokemonService.getPokemon($scope.num).then(function(response) {
            $scope.name = response.data.name;
        },function(response) {
            console.log(response.status)
        })
    }
})