$("#press").click(function() {
    $.ajax({url: "http://api.vschool.io:6543/pokemon.json", success: function(result){
        var userinput = $("#num").val();
        var pokemonName = result["objects"][0]["pokemon"][userinput]["name"];
        $("#txt").html(pokemonName)
}})
})