class Product < ApplicationRecord
  enum status: {"新品・未使用": 1, "未使用に近い": 2,"目立った傷や汚れなし":3,"やや傷や汚れあり":4,"傷や汚れあり":5,"全体的に状態が悪い":6}
  enum postage: {"送料込み（出品者負担)":1, "送料込み（出品者負担）":2, "着払い（購入者負担）":3, "着払い（購入者負担）":4}
  enum shipping_days: {"1~2日で発送":1,  "2〜3日で発送":2,"4〜7日で発送":3}
  belongs_to :user
  belongs_to :category
  has_many :images, dependent: :destroy

  validates :name, :description, :status, :postage, :shipping_area, :shipping_days, presence: true
  validates :price,presence: true,numericality: { only_integer: true, greater_than_or_equal_to: 300, less_than_or_equal_to: 9999999}
  validates :category_id,presence: true,numericality: { only_integer: true, greater_than_or_equal_to: 1, less_than_or_equal_to: 13}

  mount_uploader :image, ImageUploader
end
