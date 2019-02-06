m = [[1, 2, 3],
     [5, 6, 7],
     [9,10,11]]
def get_diagonal(m, i0, j0, d):
    return [m[(i0 + i - 1)%len(m)][(j0 + d*i - 1)%len(m[0])]
                for i in range(len(m))]

diag1=get_diagonal(m,1,1,1)

diag2=get_diagonal(m,1,3,-1)
print(diag1)
print(diag2)+
print(sum(diag1,diag2))
