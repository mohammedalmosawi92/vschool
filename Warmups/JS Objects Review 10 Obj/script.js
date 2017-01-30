var laptop = {
    color: "grey",
    number: 10,
    isWorking : true,
    print: function() {
        console.log("We have " + this.number + " " + this.color +  " laptops")
    }
}
laptop.print();

var students = {
    name : "mohammed",
    age: 24,
    print: function() {
        console.log("I'm " + this.name + " and am " + this.age)
    }
}
students.print();

var cars = {
    carType: "BMW",
    model: 2010,
    isClean: true,
    print: function() {
        console.log("My car is " + this.model + this.carType)
    }
}
cars.print();

var desktop = {
    type : "DELL",
    number: 20,
    isNew: false,
    print: function() {
        console.log("We have " + this.number + " " + this.type + " in the class")
    }
}

desktop.print();

var whiteBoard = {
    size : "Big",
    number: 1,
    isUseable: false,
    print: function() {
        console.log("we only have " + this.number + " " + this.size +  " board")
    }
}
whiteBoard.print();




var Clubs = function(clubName, yearOfFoundation, numberOfTitle) {
    this.clubName = clubName;
    this.yearOfFoundation = yearOfFoundation;
    this.numberOfTitle = numberOfTitle;
    this.print: function() {
        console.log(this.clubName + " is the best club,it was founded " + this.yearOfFoundation + " ,and they won " + this.numberOfTitle)
    }
}
var barca = new Clubs("Barcelona", 1899, 91)
barca.print()
var Players = function(playerName, playerNumber) {
    this.playerName = playerName;
    this.playerNumber = playerNumber;
    this.print = function() {
        console.log(this.playerName + " is the best player in the world his number is " + this.playerNumber)
    }
}


var Cites = function(cityName, cityLocation, cityPopulation) {
    this
}














