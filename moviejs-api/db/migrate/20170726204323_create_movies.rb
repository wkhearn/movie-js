class CreateMovies < ActiveRecord::Migration[5.1]
  def change
    create_table :movies do |t|
      t.string :title
      t.references :director
      t.integer :year
      t.string :rated
      t.integer :runtime


      t.timestamps
    end
  end
end
