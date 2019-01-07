var con=require('./calcode')

test('for two defined parameters',()=>{
    expect(con.addition(3,2)).toEqual(5)
});

test('for undefined number',()=>{
    expect(con.addition(undefined,2)).toEqual(2);
});

test('for two undefined numbers',()=>{
    expect(con.addition(undefined,undefined)).toEqual(undefined)
});
test('for b undefined',()=>{
    expect(con.addition(3,undefined)).toBe(3)
});
test('substraction of two numbers',()=>{
    expect(con.sub(1,2)).toEqual(-1);
});
test('multiplication of two numbers',()=>{
    expect(con.multi(2,2)).toEqual(4);
});
test('division of two numbers',()=>{
    expect(con.div(4,2)).toBe(2);
})

test('return single digit from number',()=>{
    expect(con.onlydigit(23)).toEqual([2,3]);
});

test('return array',()=>{
     expect(con.onlydigit(123)).toEqual([1,2,3]);
 });