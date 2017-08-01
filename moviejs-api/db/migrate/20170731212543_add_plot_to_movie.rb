class AddPlotToMovie < ActiveRecord::Migration[5.1]
  def change
    add_column :movies, :plot, :string
  end
end
