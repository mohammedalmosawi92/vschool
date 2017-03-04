var uuid = require("uuid");
var menu = [
    {
        id: uuid.v4(),
        name: "pasta",
        cost: 10,
        type: "main course"
    },
    {
        id: uuid.v4(),
        name: "chocolate cake",
        cost: 10,
        type: "dessert"
    },
    {
        id: uuid.v4(),
        name: "pizza",
        cost: 10,
        type: "appetizer"
    }
]
module.exports = menu