var http = require('http')
var ip = require('ip').address()

http.createServer(function (request, response) {
    response.writeHead(200, {'Content-Type': 'text/html'})
    response.end("<h1>Hello World! Your Node.js k8s application is working!</h1>\
    <br/><h2>Local IP: " + ip + "</h2>")
}).listen(8080)

console.log('Server started, local ip: %s', ip)