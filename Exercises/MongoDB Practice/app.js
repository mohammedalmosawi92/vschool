var mongodb = require("mongodb");

var client = mongodb.MongoClient;
var URL = "mongodb://localhost:27017/myPlayers";
client.connect(URL, function (err, db) {
    if (err) {
        console.log(err)
    } else {
        var collection = db.collection("list");
        collection.insert({name: "messi",age: 29, num: 10}, function (err, result) {
            collection.remove({name: "inesta"}, function (err, result) {
                collection.update({name: "surez"},)
                collection.find().toArray(function (err, docs) {
                    console.log(docs);
                    db.close();
                })
            })
        })
    }
})