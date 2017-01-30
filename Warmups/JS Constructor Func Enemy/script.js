function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

var Enemy = function(type) {
    this.type = "";
    this.hitPoint = "";
    this.defence = "";
    this.print = function() {
        var randomType = random(0, enemyType.length - 1);
        if(randomType == 0) {
            var hitPointRange = random(80, 100);
        } else if(randomType == 1) {
            var hitPointRange = random(50, 79);
        } else {
          var hitPointRange = random(20, 49);
        }
        this.type = enemyType[randomType];
        this.hitPoint = hitPointRange;
        this.defence = hitPointRange * 3;
    }
};
var enemyType = ["Ancient Dragon", "Prowler", "Mighty Grunt"];
var i;
for(i = 0; i < 100; i++) {
    var enemyselection = new Enemy(enemyType);
    enemyselection.print();
    console.log(enemyselection.type);
    console.log(enemyselection.hitPoint);
    console.log(enemyselection.defence);
}
