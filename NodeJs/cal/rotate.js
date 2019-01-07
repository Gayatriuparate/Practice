
function rotate() {
    
var array = [4, 7, 3, 6, 9],
    i = array.length;
    //console.log(i); 
    var k=4;
    

while(k>=0)
{
   array.unshift(array.pop());
   k--;
}console.log(array.join(' '));

}
rotate();