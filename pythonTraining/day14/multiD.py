def add_pet(pet,pets=[]):
    pets.append(pet)
    return pets
list_with_cat=add_pet("cat",[])
list_with_dog=add_pet("dog",[])
print(list_with_cat)
print(list_with_dog)