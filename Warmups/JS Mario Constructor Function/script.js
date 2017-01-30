var Player = function() {
    this.name = "";
    this.totalCoins = 0;
    this.status = ["Powered Up", "Big", "Small", "Dead"];
    this.star = true;
    this.setName = function(namePicked) {
        this.name = namePicked;
    }
    this.getHit = function(statusIndex) {
        this.getHit = this.status[0 + statusIndex];
    }
    this.gotPowerup = function(statusIndex) {
        this.gotPowerup = this.status[this.status.length - statusIndex];
    }
    this.gameActive = function() {
        if(this.status != "Dead") {
            this.gameActive = true;
        }else {
          this.gameActive = false;
        }
    }
    this.addCoin = function(num) {
       this.totalCoins += num 
    }
    this.print = function() {
        console.log(this.name + " , Total Coins " + this.totalCoins + ", " + this.getHit + ", " + this.star)
    }
}
var player = new Player();
player.setName("mario");
player.getHit(1);
player.addCoin(5);
player.print()