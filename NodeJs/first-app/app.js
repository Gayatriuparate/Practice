// function dispaly(name){
//     console.log('hello'+name)
// }
// dispaly('gayatri');
// console.log(window);
// var logger= require('./logger');
// console.log(logger);
// logger.log('hello');

// const path= require('path')
//  var pathobj=path.parse(__filename)
//  console.log(pathobj);

 const os=require('os');
 var Totalmem= os.totalmem();
 console.log(Totalmem);
 var freemem=os.freemem();
 console.log(freemem);