
var Car = function(type, model, color) {
  this.carType = type;
  this.carModel = model;
  this.carColor = color;
  this.start = function(callback) {
    console.log("I turn the key on in the " + this.carType + " car");
      callback();
  };
  this.drive = function(speed) {
    console.log("I am driving at " + speed + " kph" + " in the " + this.carColor + " " + this.carType + " car");
  };
  this.startTheCar = function() {
    console.log("The car is on");
  }
}

var oldCar = new Car("Fiat", 500, "white");
oldCar.start(oldCar.startTheCar);
oldCar.drive(100);












/*
var Person = function(name) {
    this.name = name;
    this.sleep = function() {
        console.log(this.name + " is sleep");
    }
    this.wake = function(person) {
        console.log(person.name + " is a wake")
    }
    this.alarm = function(callwake, person) {
        console.log("the alarm is on");
        callwake(person);
    }
}
var mohammed = new Person("Mohammed")
mohammed.sleep();
mohammed.alarm(mohammed.wake, mohammed);
*/