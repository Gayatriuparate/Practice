import itertools
#...................Iteretor..................
#for i in itertools.count(1):
#    print(i)
#for i in itertools.chain(numbers,animals)
#for animal in itertools.cycle(['cat','dog']):
    #print(animal)


# numbers=[1,2,3]
# animal=['cat','dog','fish']
# for i in itertools.chain(animal,numbers):
#     print(animal)

#...........ZIP..........

# for i in zip((1,2,3),(4,5,6)):
#     print(i)

# for i in zip(range(5),range(5,10),range(10,15)):
#     print(i)
#yield means return

#............comprehensions..............


#multipal lines code convert into a single line
# sqn=[1,2,3,4,5,6]
# double=[2*i for i in sqn]
# print(double)
# even_num=[i for i in sqn if i%2==0]
# print(even_num)
# odd_num

# number=[1,2,3,4,5,6,7]
# double_generator=(2* i for i in number)
# a=list(double_generator)
# double_set=(2* i for i in number)
# double=(2* i for i in number)
# print(double_set)
# print(double)
# print(a)
#..................The Break and continue statements
# age=input("Please enter you age:")
# if age>0 and age<120:
#     print('valid')

x=int(input("enter one number"))
if(x!=99):
    if x % 2 == 0:
        print("given number is even")
    elif x % 2 != 0:
        print("given number is odd")
print("End")

