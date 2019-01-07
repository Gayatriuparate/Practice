var con = require('./matrix')

test('matrix addition',()=>{
    expect(con.matrixadd([[2, 3],[2, 4]],[[1, 6], [3, 7]])).toEqual([[3, 9],[5, 11]]);
});
test('matri substraction',()=>{
    expect(con.sub([[2, 3],[2, 4]],[[1, 6], [3, 7]])).toEqual([[1,-3],[-1,-3]]);
});

test('transpose of matrix',()=>{
    expect(con.tranpose([[2,3],[2,4]])).toEqual([[2,2],[3,4]])
});
test('multiplication of number',()=>{
    expect(con.multi([[2,3],[2,4]))
})

