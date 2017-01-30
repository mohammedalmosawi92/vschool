document.addEventListener("input", goombasfunction);
function goombasfunction() {
    var goombasNum = document.getElementById("goombasNumber").value;
    document.getElementById("goombasTotal").value = Number(goombasNum) * 5;
}

document.addEventListener("input", bobombsfunction);
function bobombsfunction() {
    var bobombsNum = document.getElementById("bobombsNumber").value;
    document.getElementById("bobombsTotal").value = Number(bobombsNum) * 7;
}

document.addEventListener("input", cheepcheepsfunction);
function cheepcheepsfunction() {
    var cheepcheepsNum = document.getElementById("cheepcheepsNumber").value;
    document.getElementById("cheepcheepsTotal").value = Number(cheepcheepsNum) * 11;
}
document.addEventListener("input", total);
function total() {
    var goombasSum = document.getElementById("goombasTotal").value;
    var bobombsSum = document.getElementById("bobombsTotal").value;
    var cheepcheepsSum = document.getElementById("cheepcheepsTotal").value;
    document.getElementById("totalSum").value = Number(goombasSum) + Number(bobombsSum) + Number(cheepcheepsSum);
}
//Mohammed Aziz Almosawi copyright @ all rights reserved