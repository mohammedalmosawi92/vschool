var fs = require("fs");
var filePath = "./index.html";
var http = require("http");
http.createServer(function (request, response) {
    fs.readFile(filePath, "binary", function (err, file) {
        if (err) {
            response.writeHeader(500, {"Content-Type": "text/html"});
            response.write(err);
            response.end();
        } else {
            response.writeHeader(200, {"Content-Type": "text/html"});
            response.write(file, "binary");
            response.end();
        }
    })
}).listen(8080)
console.log("hi")