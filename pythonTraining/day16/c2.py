class Computer:
    def __init__(self):
        self.__maxprize = 900

    def sell(self):
        print("selling prize:{}".format(self.__maxprize))

    def setMaxPrize(self, price):
        self.__maxprize = price
import pdb
pdb.set_trace()
c = Computer()
c.sell()

 # change the price
c.__maxprize = 1000
c.sell()

# using setter function
c.setMaxPrize(1000)
c.sell()
