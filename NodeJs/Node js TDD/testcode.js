var PrimeFact = (number) => {
    var numarray = [];
    var fact=2;
    if (number == 1)
        numarray = null;

        while(number>=fact)
        {
            if(number%fact==0)
            {
                numarray.push(fact)
                number=number/fact;
            }
          else
            {
               fact++;

            }
        }
            
        
    //else numarray.push(number);

    return numarray;
}
module.exports = { PrimeFact };

