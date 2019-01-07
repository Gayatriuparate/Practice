
var http = require('http');

http.createServer(function (req, res) {
   res.writeHead(200, { 'Content-Type': 'text/html' });
    
    res.end('<br><br>Hello Gayatri!');
    res.write("hello...i dont get executed");
}).listen(8080);