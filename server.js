var http = require('http');

http.createServer(function (request, response) {
    response.writeHead(200, {'Content-Type': 'text/html'});
    response.end('<h1>Hello World! Your Node.js docker application is working!</h1>');
}).listen(8080);

console.log('Server started');
