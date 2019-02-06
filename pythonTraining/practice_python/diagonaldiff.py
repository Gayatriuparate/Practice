
table = [[42, 3],[1,2]]
result = 0
for i in range(len(table)):
    result += table[i][i]
    result-=table[i][-(i+1)]

print(str(result))