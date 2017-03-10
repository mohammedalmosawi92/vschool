var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var GamesSchema = new Schema({
    name: String,
    price: Number,
    isAvailable: Boolean
})

module.exports = mongoose.model("Games", GamesSchema)