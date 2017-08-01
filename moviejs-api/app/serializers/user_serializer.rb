class UserSerializer < ActiveModel::Serializer
  attributes :id, :username

  has_one :movie_list
  has_many :movies, through: :movie_lists
  # has_many :actors, through: :actor_movies, through: :movies, through: :movie_lists
end
