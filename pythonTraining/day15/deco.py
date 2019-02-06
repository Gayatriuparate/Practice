import pdb


def log(original_function):
    def new_function(*args, **kwargs):
        print("Function '%s' called with original arguments %s and \
        keyword argument %s\n" % (original_function.__name__, args, kwargs))

        return original_function(*args, **kwargs)

    return new_function

# here is a function to decorate


@log
def print_a_message(message):
    print(message)


pdb.set_trace()
# and here is how we decorate it
#print_a_message = log(print_a_message)

print_a_message("hello world!!!")