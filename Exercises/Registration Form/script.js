$('#submit').click(function() {
    var username = $('#username').val();
    var lastname = $('#lastname').val();
    var age = $('#age').val();
    var gender = $("input[name=gender]:checked").val();
    var location = [];
    $(':checkbox:checked').each(function(i) {
        location[i] =  $(".location:checked").val()
    })
    var select = $("#diet").val();
    alert("First Name: " + username + " Last Name : " + lastname + " Age : " + age + " Gender : " + gender + " Location : " + location + " Food : " + select);
})