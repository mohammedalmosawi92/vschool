var app = angular.module("app", []);
app.filter("temperature", function() {
    return function(input, typeOfTemp) {
        console.log(input+","+ typeOfTemp)
        var output = parseInt(input);
        if(typeOfTemp === "F") {
            output = (output * 1.8) + 32
        }if(typeOfTemp === "C") {
            output = (output - 32) / 1.8
        }
        return output
    }
    console.log(output)
    
})
app.controller("ctrl", function($scope) {
    
})