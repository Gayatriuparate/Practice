
var con = require('./testcode')

test('for null', () => {
    expect(con.PrimeFact(1)).toEqual(null);
});

test('for two',()=>{
    expect(con.PrimeFact(2)).toEqual([2]);
});

test('for three',()=>{
    expect(con.PrimeFact(3)).toEqual([3]);
});
test('for 4',()=>{
    expect(con.PrimeFact(4)).toEqual([2,2])
});
test('for 8',()=>{
    expect(con.PrimeFact(8)).toEqual([2,2,2])
});
test('for 9',()=>{
    expect(con.PrimeFact(9)).toEqual([3,3])
});
test('any number',()=>{
    expect(con.PrimeFact(16)).toEqual([2,2,2,2])
})