$(document).ready(function() {
    
})
$(".btn").click(function() {
    $.ajax({
        url: "http://api.fixer.io/latest?base=USD",
        type: "GET",
        success: function (data) {
            console.log("GET DATA");
            var currType = $(".select-list").val();
            console.log(currType);
            console.log(data["rates"][currType]);
        }
    })
})
