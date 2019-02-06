class Bird:
    def __init__(self):
        print("Bird is read")
    
    def whoisThis(self):
        print("Bird")

    def swim(self):
        print("swim faster")
# child class

class Penguin(Bird):
    
    def __init__(self):
        super().__init__()
        print("Penguin is ready")

    def whoisThis(self):
        print("Penguin")

    def run(self):
        print("Run faster")

import pdb; pdb.set_trace()
peggy = Penguin()
peggy.whoisThis()
peggy.swim()
peggy.run()