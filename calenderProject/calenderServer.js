var http = require('http');
var fs = require('fs');


http.createServer(function (request, response) {
    switch (request.url) {
        // case '/main.js': response.writeHead(200, { 'Content-type': 'text/javascript' });
        //     var fileContents = fs.readFile('./main.js', (err, html) => {
        //         if (err) {
        //             throw err;
        //         }
        //         response.write(html);
        //         response.end();
        //     });
        //     break;
        case '/NavbarStyle.css': response.writeHead(200, { 'Content-type': 'text/css' });
            var fileContents = fs.readFile('./NavbarStyle.css', (err, html) => {
                if (err) {
                    throw err;
                }
                response.write(html);
                response.end();
            });
            break;
        default: response.writeHead(200, { 'Content-type': 'text/html' });
            var fileContents = fs.readFile('./Navbar.html', (err, html) => {
                if (err) {
                    throw err;
                }
                response.write(html);
                response.end();
            });
    }
}).listen(8080);