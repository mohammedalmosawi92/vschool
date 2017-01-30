$(".square").hover(function(){
    $(".square").css("background","blue")
});
$(".square").mousedown(function(){
    $(".square").css("background","red")
});
$(window).scroll(function(){
    $(".square").css("background","orange")
});
$(".square").dblclick(function(){
    $(".square").css("background","green")
});
$(".square").mouseup(function(){
    $(".square").css("background","yellow")
});
$(window).keydown(function(e) {
    var code = e.keyCode;
    if(code == 66) {
        $(".square").css("background","blue");
    } else if(code == 82) {
        $(".square").css("background","red")
    } else if(code == 71) {
        $(".square").css("background","green")
    } else if(code == 89) {
        $(".square").css("background","yellow")
    } else if(code == 79) {
        $(".square").css("background","orange")
    }
})
