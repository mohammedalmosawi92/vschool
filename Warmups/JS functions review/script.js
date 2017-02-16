var print = function(word) {
    console.log(word);
    return print;
}
print("Hello")("World")("How")("Are")("You")