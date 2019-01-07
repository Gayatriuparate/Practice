var fs=require('fs')
// var util= require('util');
// fs.appendFile('new.txt','hello content!',function(err){
//     if(err) throw err;
//     console.log('saved!');
// });


// console.log(buffered);
// fs.readFile('new.txt',function(err,data){
//     var buffered=[];
//     //var array1=[];
//     Array.forEach(function(data){
//         console.log(data);
//     });
//     console.log(buffered);

// });


fs.readFile('new.txt', 'utf8', function (err, data) {
    console.log(data);
});