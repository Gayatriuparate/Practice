#this is globel variable
a=0
if a==0:
	#this is still globale variable
	b=1
def my_function(c):
	#this is a local variable 
	d=3
	print(c)
	print(d)
#Now we call the function and passing the value 7 to the function first and only parameter
my_function(7)

# a and b still exist
print(a)
print(b)

# c and d does not exist
print(c)
print(d)

