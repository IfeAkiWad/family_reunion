# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Reunion.create(name: 'Rufus Family Reunion', year: 1990, park_id:1, person_id:1 )

Person.create(name: 'Tobias Rufus', age: 70)

Park.create(name: 'Liberty Mutual Public Park' )