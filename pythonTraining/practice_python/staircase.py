num_stairs = 4
def staircase(num_stairs):
    for stairs in range(1, num_stairs + 1):
        a = ' ' * (num_stairs - stairs) + '#' * stairs
        print(a)
staircase(num_stairs)