var app = angular.module("app", []);
app.filter("search", function () {
    return function (input, term) {
        var output = []
        for(var i = 0; i < input.length; i++) {
            if(input[i].name.indexOf(term) != -1) {
                output.push(input[i])
            }
        }
        return output
    }
})
app.controller("ctrl", function ($scope) {
    $scope.list = [
        {
            name: "mohammed"
    },
        {
            name: "ali"
    },
        {
            name: "khaled"
    },
        {
            name: "hassan"
    },
        {
            name: "ahmed"
    }
    ]
})