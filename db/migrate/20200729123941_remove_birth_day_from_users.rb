class RemoveBirthDayFromUsers < ActiveRecord::Migration[5.2]
  def change
    remove_column :users, :birth_day, :datetime
  end
end
