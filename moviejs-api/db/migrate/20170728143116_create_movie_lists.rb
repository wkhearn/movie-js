class CreateMovieLists < ActiveRecord::Migration[5.1]
  def change
    create_table :movie_lists do |t|
      t.references :movie
      t.references :user

      t.timestamps
    end
  end
end
