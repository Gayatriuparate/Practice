WEEKDAYS =('mon','tues','wed','thu','fri','sat','sun')
def print_fuuny_weekday_list(weekdays):
    weekdays[5]='Caturday'#this is going to modify
    print(weekdays)
print_fuuny_weekday_list(WEEKDAYS)
print(WEEKDAYS)#oops