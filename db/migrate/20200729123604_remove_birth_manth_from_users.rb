class RemoveBirthManthFromUsers < ActiveRecord::Migration[5.2]
  def change
    remove_column :users, :birth_manth, :datetime
  end
end
