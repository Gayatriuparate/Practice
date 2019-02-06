#globle variable
a=0
def my_function():
	#local variable
	global a=3
	print(a)

my_function()
print(a)

# result will be 0 3
