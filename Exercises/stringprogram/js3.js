var class = [{name: "moahmmed" ,grade: 99}, {name: "aziz", grade: 80}, {name: "ahmed", grade: 50}, {name: "Khaled" ,grade: 75}, {name: "samer", grade : 65}];
console.log(class);
var students = function(list) {
    for(var i = 0; i < list.length; i++) {
        if(list[i].grade > 59) {
            console.log("passed")
        }
    }
}