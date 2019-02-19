# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)
# make with loop
Event.create({title:"Demo", 
description:"Test1",
event_date:Date.today})

User.create({first_name:"Gayatri", 
last_name:"Uparate"})