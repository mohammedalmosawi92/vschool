var uuid = require("uuid");
var list = [
    {
        id: uuid.v4(),
        firstName: "Nader",
        lastName: "almosig",
        living: false,
        bountyAmount: 10,
        type: "jedi"
    },
    {
        id: uuid.v4(),
        firstName: "mohammed",
        lastName: "aziz",
        living: true,
        bountyAmount: 100,
        type: "sith"
    },
    {
        id: uuid.v4(),
        firstName: "ahmed",
        lastName: "khaled",
        living: false,
        bountyAmount: 100,
        type: "jedi"
    }
]
module.exports = list