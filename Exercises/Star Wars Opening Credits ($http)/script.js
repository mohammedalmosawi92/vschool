$(document).ready(function() {
    $.ajax({
        url: "http://swapi.co/api/films/1/",
        type: "GET",
        success: function (data) {
            console.log("GET DATA")
            $(".txt").html(data["opening_crawl"])
        }
    })
})