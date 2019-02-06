import pdb
def make_greetings(title, name, surname, formal=True, time=None):
    if formal:
        return 'hello,%s %s!' % (title, surname)
    else:
        fullname = name
    if time is None:
        greeting = 'hello'
    else:
        greeting = 'good %s' % time

    return '%s,%s!' % (greeting, fullname)


pdb.set_trace()
print(make_greetings('mr', 'john', 'smith'))
print(make_greetings('mr', 'john', 'smith', False))
print(make_greetings('mr', 'john', 'smith', False, 'evening'))

check
synerzip@ULTP-390:~/Desktop/Practice/pythonTraining/day14$ python3 dp1.py
> /home/synerzip/Desktop/Practice/pythonTraining/day14/dp1.py(16)<module>()
-> print(make_greetings('mr', 'john', 'smith'))
(Pdb) make_greetings('john','smith')
*** TypeError: make_greetings() missing 1 required positional argument: 'surname'
(Pdb) make_greetings('john','smith','skjdh')
'hello,john skjdh!'
(Pdb) make_greetings('john','smith','skjdh',False)
'hello,smith!'
(Pdb) make_greetings('john','smith','skjdh',False,'evening')
'good evening,smith!'
(Pdb) make_greetings('john','smith',surname='skjdh')
'hello,john skjdh!'
(Pdb) make_greetings('john','smith',formal=false)
*** NameError: name 'false' is not defined
(Pdb) make_greetings('john','smith',formal=False)
*** TypeError: make_greetings() missing 1 required positional argument: 'surname'
(Pdb) make_greetings('john','smith',formal=False,'fddfsfds')
*** SyntaxError: positional argument follows keyword argument
(Pdb)