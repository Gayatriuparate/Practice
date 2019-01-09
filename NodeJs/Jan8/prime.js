var prime=(number)=>{
    var numarray=[];
    if(number==1)
    {
        numarray.push(null)
        return numarray;
    }
    while(number%2==0)
    {
        numarray.push(2)
        number=number/2;
       
    }
    if(number>1)
    {
        numarray.push(number)
    }
    return numarray;

}
module.exports={prime}