var store = angular.module("myStore", []);
store.service("myStore", function() {
    this.list = [];
    this.total = 0;
    this.addItem = function(name,cost) {
        this.list.push({
            name: name,
            cost: cost
        })
        this.total += cost;
    }
})