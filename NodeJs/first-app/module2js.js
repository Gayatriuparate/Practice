var http= require('http')
var modul2=require('./module2');
http.createServer(function(rqe,res){
    res.write(modul2.calculate(4,5));
    
}).listen(8080);