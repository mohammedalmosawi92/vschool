document.getElementById("press").addEventListener("click", function() {
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if(xhr.readyState  == 4 && xhr.status == 200) {
            var strData = xhr.responseText;
            var data = JSON.parse(strData);
            var userinput = document.getElementById("num").value;
            var dataObject = data["objects"][0]["pokemon"][userinput]["name"];
            document.getElementById("txt").innerHTML = dataObject;
        } else if(xhr.readyState  == 4 && xhr.status != 200) {
        console.log(xhr.status);
        }
    };
    xhr.open("GET", "http://api.vschool.io:6543/pokemon.json", true);
    xhr.send();
})