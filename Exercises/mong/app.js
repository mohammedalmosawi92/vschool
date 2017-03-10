var mongoose = require("mongoose");
var Game = require("./games.js");

mongoose.connect("mongodb://localhost/PcGames")
var godOfWar = new Game({
    name : "God Of War",
    price : 30,
    isAvailable : false
})

//godOfWar.save(function(err, newPerson) {
//    if(err) {
//        console.log(err)
//    }else {
//        Game.remove({price: 50}, function(err, deleted) {
//            if(err){
//                console.log(err)
//            }else {
//                Game.find({}, function(err, data){
//                    if(err){
//                        console.log(err)
//                    }else {
//                        console.log(data)
//                    }
//                })
//            }
//        })
//    }
//})

Game.findOne({name: "uncharted"}, function(err, game) {
    game.name = "Fallout 2";
    game.save();
})

//Game.update({price: 30}, {name: "uncharted"}, function (err, gameName) {
//    if (err) {
//        console.log(err)
//    } else {
//        Game.find({}, function (err, data) {
//            if (err) {
//                console.log(err)
//            } else {
//                console.log(data)
//            }
//        })
//    }
//})