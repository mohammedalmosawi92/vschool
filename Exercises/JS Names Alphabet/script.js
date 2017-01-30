var people = ["Jon", "Jacob", "Jingle", "Heimer", "Schmidt"];
var alphabet = "abcdefghijklmnopqrstuvwxyz";
var arra = [];
for (i = 0; i < people.length; i++) {
    arra.push(people[i]);
    for (j = 0; j < alphabet.length; j++) {
    arra.push(alphabet[j])
    }
}
console.log(arra)