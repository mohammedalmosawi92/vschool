var express = require("express");
var bodyParser = require("body-parser");
var bountyList = require("./bountyList.js");
var port = process.env.Port || 8080;
var uuid = require("uuid");
var validate = require("./utils.js");
var path = require("path");
var ejs = require("ejs");

//setup server
var app = express();

//setup server to handle json
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

//setup public facing files
app.use(express.static(path.join(__dirname + "\\..\\public")));
app.set("views", __dirname + "\\..\\public");
app.engine("html", ejs.renderFile);
app.set("view engine", "ejs");

app.get("/", function(req, res) {
    res.render("index.html");
})

app.get("/bounty/", function(req,res) {
    if(Object.keys(req.query).length === 0) {
        res.status(200).send({success: true,data: bountyList})
    }else if(Object.keys(req.query).length > 0) {
        var filteredData = [];
        for(key in req.query) {
            for(var i = 0; i < bountyList.length;i++) {
                if(bountyList[i][key] === req.query[key]) {
                    filteredData.push(bountyList[i])
                }
            }
        }
        res.status(200).send({success: true,data: filteredData})
    }
})

app.get("/bounty/:id",function(req, res) {
    var id = req.params.id;
    for(var i = 0; i < bountyList.length; i++) {
        if(bountyList[i].id == id) {
            res.status(200).send({success: true, data : bountyList[i]});
        }
    }
    res.status(404).send({message: "there is no data with this " + id + " id"})
})

app.post("/bounty", function (req, res) {
    var data = {
        id: uuid.v4(),
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        living: req.body.living,
        bountyAmount: req.body.bountyAmount,
        type: req.body.bountyAmount
    };
    var didPass = validate(data);
    if(didPass.pass == false) {
        res.status(400).send({message : didPass.message})
    }else {
        bountyList.push(data);
        res.status(200).send({"message": "success"});
    }
})

app.delete("/bounty/:id", function (req, res) {
    var id = req.params.id;
    for(var i = 0; i < bountyList.length; i++) {
        if(bountyList[i].id == id) {
            bountyList.splice(i, 1);
            res.status(200).send({"message": "You have deleted an item"});
        }
    }
})

app.put("/bounty/:id", function (req, res) {
    var id = req.params.id;
    for(var i = 0; i < bountyList.length; i++) {
        if(bountyList[i].id == id) {
            for(key in bountyList[i]) {
                if(req.query[key] !== undefined && req.query[key] !== "") {
                    bountyList[i][key] = req.query[key];
                }
            }
            res.status(200).send({"message": "You have updated an item"});
        }
    }
})

app.listen(port, function () {
    console.log("My port is " + port)
})