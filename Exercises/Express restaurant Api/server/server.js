var express = require("express");
var bodyParser = require("body-parser");
var uuid = require("uuid");
var menu = require("./menu.js");
var validate = require("./utils.js");
var path = require("path");
var ejs = require("ejs");

//setup the server
var app = express();

//setup the server port
var port = process.env.Port || 8080

//setup the server to handle json
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname + "\\..\\public")));
app.set("views", __dirname + "\\..\\public\\view");
app.engine("html", ejs.renderFile);
app.set("view engine", "ejs");
app.get("/", function(req, res) {
    res.render("index.html")
})
app.get("/menu", function(req, res) {
    if(Object.keys(req.query).length === 0){
        res.status(200).send({success: true, data : menu})
    }else{
        var filteredData = [];
        for(key in req.query){
            for(var i = 0; i < menu.length; i++){
                if(menu[i][key] === req.query[key]) {
                    filteredData.push(menu[i])
                }
            }
        }
        if(filteredData.length > 0) {
            res.status(200).send({success: true, data : filteredData});
        }else {
            res.status(404).send({"message" : "No such files"})
        }
    }
})

app.get("/menu/:id", function(req, res) {
    var id = req.params.id;
    for(var i = 0; i < menu.length; i++) {
        if(menu[i].id == id){
            res.status(200).send({success: true, data : menu[i]});
        }
    }
    res.status(404).send({"message" : "No such file"})
})

app.post("/menu", function(req, res) {
    var data = {
        id: uuid.v4(),
        name: req.body.name,
        cost: req.body.cost,
        type: req.body.type
    }
    var isValid = validate(data);
    if(isValid.pass === false) {
        res.status(404).send({message: isValid.failed})
    }else {
        menu.push(data)
        res.status(200).send({success: true})
    }
})

app.delete("/menu/:id", function(req, res) {
    var id = req.params.id;
    for(var i = 0; i < menu.length; i++) {
        if(menu[i].id == id){
            menu.splice(i, 1);
            res.status(200).send({success: true});
        }
    }
    res.status(404).send({"message" : "No such file"})
})

app.put("/menu/:id", function(req, res) {
    var id = req.params.id;
    var updated = false;
    for(var i = 0; i < menu.length; i++) {
        if(menu[i].id == id){
            for(key in menu[i]){
                if(req.query[key] !== undefined && req.query[key] !== ""){
                    menu[i][key] = req.query[key];
                    updated = true;
                }
            }
            if(updated == true){
                res.status(200).send({message: "menu has been updated"})
            }
        }
    }
})

app.listen(port, function() {
    console.log("My port is " + port)
})