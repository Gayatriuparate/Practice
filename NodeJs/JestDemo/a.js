// var addition=(a,b)=>a+b;
// var sub=(a,b)=>a-b;
var primeFact = (number) => {
    var numarray = [];
    var fact = 2;

    if (number == 1)
        numarray = null;

    while (number >=fact) {

        if (number % fact == 0) {
            numarray.push(fact);
            number = number / fact;
        }

        else
            fact++;
    }



    return numarray;
}
module.exports = { primeFact }
