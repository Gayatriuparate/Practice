var con = require('./a')
//var reault= con.add(2,3);
// test('2 and 3 = 5',()=>{
//     expect(con.addition(2,3)).toBe(5);
// });
// test('3-3=0',()=>{
//     expect(con.sub(3,3)).toBe(0);
// });
test('prime null',()=>{
    expect(con.primeFact(1)).toBe(null);
});
test('prime 2 ',()=>{
     expect(con.primeFact(2)).toEqual([2]);
 });
 test('prime 3',()=>{
     expect(con.primeFact(3)).toEqual([3]);
 });
 test('prime 4',()=>{
    expect(con.primeFact(4)).toEqual([2,2]);
});
test('prime 8',()=>{
    expect(con.primeFact(8)).toEqual([2,2,2]);
});
test('prime 16',()=>{
    expect(con.primeFact(16)).toEqual([2,2,2,2]);
});
test('prime 6',()=>{
       expect(con.primeFact(6)).toEqual([2,3]);
     });
    
test('prime 9',()=>{
    expect(con.primeFact(9)).toEqual([3,3]);
});
