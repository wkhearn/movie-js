class User < ApplicationRecord
  has_one :movie_list
  has_many :movies, through: :movie_list
end
