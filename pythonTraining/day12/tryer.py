#...............Error Handling.............
# try:
#     age=int(input("enter age:"))
#     # if age<0:
#     #     raise ValueError("%d is not valid age.Age must be positive")
# except ValueError as err:
#     print(err)
#     print("Hey, Please Enter number!")
# else:
#     print("I see that you are %d years old." %age)


#.............pdb is a python module which is used for debugging program.......
# pyflakes
# pylint
# pep8

def check(n):
    import pdb; pdb.set_trace()
    range_obj=range(n)
    l1=list(range_obj)
    return l1
print(check(10))
#............Logging.........................
# critical=for very serious
# errro=less serious
# Warning=for Warning
# debugging= all types of errro
