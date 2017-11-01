var http = require('http');

http.createServer(function (request, response) {
    response.writeHead(200, {'Content-Type': 'text/plain'});
    response.end('Hello World! Your Node.js docker application is working!\n');
}).listen(8080);

console.log('Server started');
