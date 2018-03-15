class AddOrdinalTimesToPosts < ActiveRecord::Migration[5.1]
  def change
    add_column :posts, :ordinal_time, :string
  end
end
