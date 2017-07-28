# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)



Director.create(name: "Steven Spielberg")
Actor.create(name: "Robin Williams")
Actor.create(name: "Dustin Hoffman")
Movie.create(title: "Hook", director_id: 1, year: 1991 , rated: "PG", runtime: 142)
ActorMovie.create(actor_id: 1, movie_id: 1)
ActorMovie.create(actor_id: 2, movie_id: 1)

Director.create(name: "Tony Scott")
Movie.create(title: "Man on Fire", director_id: 2, year: 2004 , rated: "R", runtime: 147)
Actor.create(name: "Denzel Washington")
ActorMovie.create(actor_id: 3, movie_id: 2)


Director.create(name: "Christopher Nolan")
Movie.create(title: "The Dark Knight", director_id: 3, year: 2008 , rated: "PG-13", runtime: 152)
Actor.create(name: "Heath Ledger")
ActorMovie.create(actor_id: 4, movie_id: 3)

User.create(username: "KennethWinfredHearn")
MovieList.create(user_id: 1, movie_id: 1)
MovieList.create(user_id: 1, movie_id: 2)
MovieList.create(user_id: 1, movie_id: 3)

User.create(username: "LarsonLaidlaw")
MovieList.create(user_id: 2, movie_id: 1)
MovieList.create(user_id: 2, movie_id: 2)
