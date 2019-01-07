
// const testsum= require('./sum')
// result=testsum.add(2,3)
// console.log(result);
// result=testsum.sub(2,3)
// console.log(result);
// result=testsum.div(2,3)
// console.log(result);

const cal=require('./sum')
test('2 and 3 = 5',()=>{
    expect(cal.add(2,3)).toBe(5);
})
