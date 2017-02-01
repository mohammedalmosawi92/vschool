$(document).ready(function() {
    
})
$(".btn").click(function() {
    $.ajax({
        url: "http://api.fixer.io/latest?base=USD",
        type: "GET",
        success: function (data) {
            console.log("GET DATA");
            var currType = $(".select-list option:selected").val();
            console.log(currType);
            var str = JSON.stringify(currType)
            var dataRates = data["rates"];
            console.log(dataRates[str])
        }
    })
    ;
})
