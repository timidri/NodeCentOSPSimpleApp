var http = require('http');

http.createServer(function (request, response) {
    response.writeHead(200, {'Content-Type': 'text/plain'});
    response.writeBody(200, {'<h1>Hello World! Your Node.js application is working!</h1>'});
    response.end();
}).listen(3000);

console.log('Server started');
