LOWER,UPPER,CAPITAL=1,2,3
name="jane"
#we use our constant when assigning this values..
print_style=CAPITAL
# ...and when checking them

if print_style==LOWER:
	print(name.lower())
elif print_style==UPPER:
	print(name.upper())
elif print_style==CAPITAL:
	print(name.capitalize())
else:
	#Nothig prevent us from accidentally setting print_style to 4,90 or
	# "spoon", so we put in this fallback just in case:
	print("Unknow style option")
