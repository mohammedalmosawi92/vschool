$("#press").click(function() {
    var decNum = $("#decimal").val();
    var binary = parseInt(decNum,10).toString(2);
    $("#binary").val(binary)
})