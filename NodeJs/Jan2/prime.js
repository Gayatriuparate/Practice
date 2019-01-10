var prime = (number) => {
    var numarray = [];
    var f = 2;
    if (number == 1) {
        numarray.push(null);
        return numarray;
    }
  while (number > 1) {
      if(number % f == 0) {
            numarray.push(f);
            number = number / f;

        }
    
    else {
        f++;
    }
}
    return numarray;


}
module.exports = { prime }