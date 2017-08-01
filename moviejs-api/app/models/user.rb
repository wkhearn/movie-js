class User < ApplicationRecord
  has_one :movie_list
  has_many :movies, through: :movie_list
  has_many :actor_movies, through: :movies
  has_many :actors, through: :actor_movies
end
