class CreateProducts < ActiveRecord::Migration[5.2]
  def change
    create_table :products do |t|
      t.string :name,null:false,index: true
      t.integer :price, index: true
      t.text :description,null:false
      t.string :brand,null:false 
      t.string :status,null:false
      t.integer :postage,null:false
      t.string :shipping_area
      t.integer :shipping_days
      t.references :user, type: :bigint,null:false, foreign_key: true
      t.references :category,null:false, foreign_key: true
      t.integer :buyer_id
      t.timestamps
    end
  end
end
