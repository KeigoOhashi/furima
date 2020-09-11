class Category < ApplicationRecord
  has_many :products
  has_ancestry
end
#class Product < ApplicationRecord
#  belongs_to :category
#end

