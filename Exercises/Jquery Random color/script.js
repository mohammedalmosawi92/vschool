$("#text").css("color","red");
$("#color-button").click(function() {
    $("#text").css("color",getColor())
});
var colors = ["red", "black", "blue", "pink", "purple"]
var random = function(max,min) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}
var getColor = function() {
    return colors[random(0,colors.length - 1)]
}