class Image < ApplicationRecord
  mount_uploader :product_image, ImageUploader
  belongs_to :product
  validates :product_image, presence: true
end
