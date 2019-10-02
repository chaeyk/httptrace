var cluster = require("cluster");
var http = require("http");
var url = require("url");

http.createServer(function(request, response) {

    var body = "";
    request.on("data", function (chunk) {
        body += chunk;
    });

    request.on("end", function () {
        console.log(request.connection.remoteAddress);
        console.log(request.method + ' ' + request.url);

        for (var headerName in request.headers) {
            console.log(headerName + ": " + request.headers[headerName]);
        }

        console.log();

        if (body.length > 0) {
            console.log(body);
            console.log();
        }


        body = "<html><body>Hello, World</body></html>";

        response.writeHead(200, {"Content-Type": "text/plain", "Content-Length":                                                                                                          body.length});
        response.write(body);
        response.end();
    });

}).listen(8000, "0.0.0.0");

process.on('SIGINT', function() { process.exit(); })
process.on('SIGTERM', function() { process.exit(); })
