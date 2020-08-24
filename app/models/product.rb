class Product < ApplicationRecord
  belongs_to :user
  belongs_to :category
  has_many :images, dependent: :destroy

  validates :name, :description, :status, :postage, :shipping_area, :shipping_days, presence: true
  validates :price,presence: true,numericality: { only_integer: true, greater_than_or_equal_to: 300, less_than_or_equal_to: 9999999}
  validates :category_id,presence: true,numericality: { only_integer: true, greater_than_or_equal_to: 1, less_than_or_equal_to: 13}

  mount_uploader :image, ImageUploader
end
