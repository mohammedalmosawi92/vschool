var app = angular.module("pokemon", []);
app.service("pokemonService", function($http) {
    this.getPokemon = function(num) {
        return $http.get("http://pokeapi.co/api/v2/pokemon/" + num)
    }
})