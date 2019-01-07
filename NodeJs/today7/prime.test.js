var con = require('./primecode');
test('test for null',()=>{
    expect(con.prime(1)).toEqual([null])
});
test('test for 2',()=>{
    expect(con.prime(2)).toEqual([2]);
});

test('for 3',()=>{
    expect(con.prime(3)).toEqual([3]);
});
test('for 4',()=>{
expect(con.prime(4)).toEqual([2,2]);
});
test('for 8',()=>{
    expect(con.prime(8)).toEqual([2,2,2]);
})
test('for 6',()=>{
    expect(con.prime(6)).toEqual([2,3]);
})
test('for 9',()=>{
    expect(con.prime(9)).toEqual([3,3]);
})
