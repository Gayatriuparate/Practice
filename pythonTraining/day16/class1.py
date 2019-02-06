import pdb


class Person:

    TITLES = ('Dr', 'Mr', 'Mrs', 'Ms')

    def __init__(self, title, name, surname):
        if title not in self.TITLES:
            raise ValueError("%s is not a valid title" % title)

        self.title = title
        self.name = name
        self.surname = surname

    def __str__(self):
        return "Title:%s, name:%s, surname:%s "%(self.title,self.name,self.surname)


    @classmethod
    def allowed_titles_strating_with(cls, startswith):  # class method
        # class or instance object accessible through calss
        return [title for title in cls.TITLES if title.startswith(startswith)]

    # def fullname(self):
    #     if hasattr(self, "_fullname"):
    #         return self._fullname
    #     fullname = "%s%s" % (self.name, self.surname)
    #     self._fullname = fullname
    #     return fullname

    @property
    def fullname(self):
        return"%s %s"%(self.name, self.surname)  

    @staticmethod
    def allowed_titles_ending_with(endswith): # sattic method
        # no parameter for class or instance object
        # we have to use person directly
        return[t for t in Person.TITLES if t.endswith(endswith)]
    
    @fullname.setter
    def fullanme(self, value):
        #this is numch more complcated in real life
        name, surname=value.split(" ",1)
        self.name=name
        self.surname=surname

    @fullname.deleter
    def fullanme(self):
        del self.name
        del self.surname

    

person_object = Person(
    "Mr",
    "john",
    "Smith"
)


print(person_object)
print(person_object.surname)
pdb.set_trace()
print(person_object.fullname)
print(person_object.allowed_titles_strating_with('M'))
print(Person.allowed_titles_strating_with('M'))
print(person_object.allowed_titles_ending_with("s"))
print(Person.allowed_titles_ending_with("s"))