var express = require("express");
var User = require("../models/auth.js");
var authRouter = express.Router();

authRouter.post("/signup", function(req, res) {
    User.find({username: req.body.username}, function(err, data) {
        if(err){
            res.status(500).send(err)
        }else if(data.length > 0) {
            res.status(400).send({"message": "this user already exists"})
        }else {
            var newUser = new User(req.body);
            newUser.save(function(err, data) {
                if(err){
                    res.status(500).send(err)
                }else {
                    res.status(200).send({"message": "the user is signed up"})
                }
            })
        }
    })
})

authRouter.post("/signin", function(req, res) {
    User.findOne({username: req.body.username}, function(err, data) {
        if(err){
            res.status(500).send(err)
        }else if(data == undefined) {
            res.status(400).send({"message": "the username does not exist"})
        }else if(data.password != req.body.password) {
            res.status(400).send({"message": "the password is wrong"})
        }else {
            res.status(200).send({"message": "you have logged in"})
        }
    })
})

module.exports = authRouter