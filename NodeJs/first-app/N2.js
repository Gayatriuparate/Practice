var http = require('http')
var dt = require('./myfirstmodul')
var dtt = require('./module2')
http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write("hi I am reach");
    res.write(dt.myDateTime());
    res.write(dtt.calculate(5, 4));
}).listen(8083);
