const fs = require('fs');
const files= fs.readdirSync('../')
console.log(files);

fs.readdir('./', function(error,result)
{
    if(error)
    console.log("error"+error);
    console.log(`error ${error}`)
    else(result)
    console.log("result",result);

})
