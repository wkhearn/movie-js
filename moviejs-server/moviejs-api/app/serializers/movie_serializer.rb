class MovieSerializer < ActiveModel::Serializer
  attributes :id, :title, :year, :runtime, :rated

  belongs_to :director
  has_many :actors, through: :actor_movies
end
