def make_greeting(title, name, surname, formal=True):
    if formal:
        return "hello, %s %s!" % (title, surname)

    return "hello,%s!" % name

import pdb;pdb.set_trace()
print(make_greeting("Mr", "john", "smith"))
print(make_greeting("Mr", "john", "smoth", False))
