class UserSerializer < ActiveModel::Serializer
  attributes :id, :username

  has_many :movies, through: :movie_lists
end
