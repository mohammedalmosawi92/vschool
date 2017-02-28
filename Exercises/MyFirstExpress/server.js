var express = require("express");
var app = express();
var port = process.env.Port || 8080
app.get("/", function(req, res) {
    res.send("Hello World")
})
app.listen(port, function() {
    console.log("the port is " + port)
})