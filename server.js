var http = require('http');

http.createServer(function (request, response) {
    response.writeHead(200, {'Content-Type': 'text/html'});
    response.end('<h1>Hello World! Hello Lifecycle, hello Nadja! Your Node.js application is working!</h1>');
}).listen(3000);

console.log('Server started');
