var http = require('http');

http.createServer(function (request, response) {
    response.writeHead(200, {'Content-Type': 'text/plain'});
    response.end('<html><body bgcolor="green"><h1>Hello World! Your Node.js application is working!</h1></body></html>');
}).listen(3000);

console.log('Server started');
