var app = angular.module("nameModule", [])
app.directive("name", function () {
    return {
        scope: {
            personName : "="
        },
        templateUrl : "js/Directives/name/name.html",
        restrict : "AE",
        link: function(scope, elem, attrs) {
            elem.bind("click", function() {
                scope.personName = "Mohammed";
                scope.$apply();
                elem.css("text-align", "center")
            })
        }
    }
})