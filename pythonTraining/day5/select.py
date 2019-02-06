weight=float(input("Enter weight"))
if weight<=1000:
	if weight<=300:
		cost=5
	else:
		cost=5+2*round((weight-300)/100)
	print("your parcle will cost R%d,"%cost)
else:
	print("Maximum weight for small parcle exceeded")
	print("use large parcle service insted")
