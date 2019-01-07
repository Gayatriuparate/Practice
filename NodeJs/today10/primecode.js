var prime=(number)=>{
    var numarray=[];
    var fact=2;
    if(number==1)
     numarray.push(null)
    
    while(number>1)
    {
        if (number%fact==0)
        {
             numarray.push(fact);
     number=number/fact;
    }
   
    else
        fact++;
}
    return numarray;


}
module.exports={prime};

