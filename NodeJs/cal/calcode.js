var addition = (a, b) => {
    if (a == undefined) {
        return b;
    }
    if (a == undefined && b == undefined) {
        return undefined;
    }
    if (b == undefined) {
        return a
    }
    else
        return a + b;
}
var sub = (a, b) => {
    return a - b;
}
var multi = (a, b) => {
    return a * b;
}
var div = (a, b) => {
    return a / b;
}
var onlydigit = (a) => {
   
    var numarray = [];
    var digit;
    while (a > 0) {
        digit = a % 10;
        numarray.push(digit);
        //onsole.log(a + "--->" + digit);
        a = a / 10;
        a = Math.floor(a);

    }
    return numarray.reverse();

}

module.exports = { addition, sub, multi, div, onlydigit };  