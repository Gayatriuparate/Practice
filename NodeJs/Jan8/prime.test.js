var obj=require('./prime')
test('for null',()=>{
    expect(obj.prime(1)).toEqual([null])
});

test('for 2',()=>{
    expect(obj.prime(2)).toEqual([2])
});

test('for 3',()=>{
    expect(obj.prime(3)).toEqual([3])
});


test('for 4',()=>{
    expect(obj.prime(4)).toEqual([2,2])
});

test('for 8',()=>{
    expect(obj.prime(8)).toEqual([2,2,2])
});

