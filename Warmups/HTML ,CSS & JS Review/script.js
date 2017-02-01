var pcs = {
    number : 5,
    color : black,
    isWorking: false,
}
var laptops = {
    number : 10,
    color : grey,
    isWorking: true,
    work : function() {
        console.log("we have " + laptops.number + laptops.color + " laptops")
    }
}

var Person = function(name, age, eyeColor) {
    this.name = name || "No Name";
    this.age = age || 0;
    this.eyeColor = eyeColor || "Blind";
}

var ali = new Person("Ali",20,"blue");
var ahmed = new Person("Ahmed",12,"grey");

var UserLaptop = function(personName, type, size, system) {
    this.personName = personName;
    this.type = type;
    this.size = size;
    this.system = system;
    this.using = function() {
        console.log(this.personName + " is using " + this.type = type)
    }
}
var user1 = new UserLaptop("Khaled", "Hp", "small", "windows 7")
var user2 = new UserLaptop("Noor", "apple", "big", "windows 10")