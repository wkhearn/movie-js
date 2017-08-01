class AddRatingToMovieList < ActiveRecord::Migration[5.1]
  def change
    add_column :movie_lists, :rating, :integer
  end
end
