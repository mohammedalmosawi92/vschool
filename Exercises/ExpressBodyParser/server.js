var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var students = require("./std.js")
var port = process.env.Port || 8080;
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.get("/", function(req, res) {
    res.status(200).send(students);
})

app.post("/", function(req, res) {
    students.push(req.body);
    res.status(200).send({"message" : "seccess"});
})

app.listen(port, function() {
    console.log("my port is " + port)
})
//the original bounty hunter