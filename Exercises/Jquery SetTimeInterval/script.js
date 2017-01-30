$(".clickbtn").on("click", function() {
    $(".press").html("You pressed the button");
})
setTimeout(function() {
    $(".wait").html("You have waited 2s")
},2000)

var student = {
    name: "mohammed",
    age: 24,
    print: function(call) {
        console.log("my name is mohammed");
        call()
    }
}
var hi = function() {
    console.log("hello")
}
student.print(hi)