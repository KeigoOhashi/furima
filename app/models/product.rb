class Product < ApplicationRecord
  belongs_to :user
  belongs_to :category

  mount_uploader :image, ImageUploader
end
