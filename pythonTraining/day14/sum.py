
# * means combine into tuple
# * means combine into tuple



def print_args(*args):

    for arg in args:
        print(arg)


def print_kwargs(**kwargs):
    for k, v in kwargs.items():
        print("%s: %s" % (k, v))

a_list=["one","two"]
print_args("one", "two", "three")
print_args("one", "two", "three", "four")
import pdb; pdb.set_trace()
print_kwargs(name="sgfcudsj", surname="dfhkj")
print_kwargs(age=10)

# *args mean all arguments which is you are passed is combine into tuples
