var app = angular.module("app", []);
app.service("addService", function() {
    this.pokemonList = [];
    this.addPokemon = function(pokemonName) {
        if(this.pokemonList.indexOf(pokemonName) == -1) {
           this.pokemonList.push(pokemonName); 
        }else {
            alert("you already added this pokemon")
        }
    }
    this.removePokemon = function(name) {
        var num = this.pokemonList.indexOf(name);
        if(num != -1) {
            this.pokemonList.splice(num,1)
        }else {
            alert("No Such Name")
        }
    }
})
app.controller("ctrl", function($scope,addService) {
    $scope.list = [];
    $scope.add = function() {
        addService.addPokemon($scope.pokemonName);
        $scope.list = addService.pokemonList;
        $scope.pokemonName = "";
    }
    $scope.remove = function() {
        addService.removePokemon($scope.pokemonName);
        $scope.list = addService.pokemonList;
        $scope.pokemonName = "";
    }
})