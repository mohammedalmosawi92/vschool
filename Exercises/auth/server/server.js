var express= require("express");
var bodyParser = require("body-parser");
var mongoose = require("mongoose");

//get port
var port = process.env.Port || 8080
//connect to data base
mongoose.connect("mongodb://localhost/todolist");

//setup app
var app = express();

//setup to handle json
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

//import routes
var apiRouter = require("./routes/api.js");
var signRouter = require("./routes/sign.js");

app.use("/todo", apiRouter);
app.use(signRouter);

app.listen(port, function() {
    console.log("I'm listening on port " + port)
})