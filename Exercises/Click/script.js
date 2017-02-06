$(".start").click(function () {
    var de = $(".timer-count").val();
    var count = -1;
    if($(".timer-count").val() == 0) {
        alert("Please Set Timer")
        de++ // so that the timer does not go below 0 
    }
    var timer = setInterval(function () {
        de--;
        $(".timer-count").val(de);
        if (de <= 0) {
            clearInterval(timer);
            $(window).off("click");
            localStorage.setItem('highScore', JSON.stringify(count))
        }
    }, 1000)

    $(window).click(function () {
        count++
        $(".click-num").val(count);
    })
})
if(localStorage.getItem('highScore')) {
    $(".click-num").val(JSON.parse(localStorage.getItem('highScore')))
}else {
    $(".click-num").val()
}