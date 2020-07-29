# README

This README would normally document whatever steps are necessary to get the
application up and running.

Things you may want to cover:

* Ruby version

* System dependencies

* Configuration

* Database creation

* Database initialization

* How to run the test suite

* Services (job queues, cache servers, search engines, etc.)

* Deployment instructions

* ...
# furima DB設計
## usersテーブル
|Column|Type|Options|
|------|----|-------|
|nickname|string|null: false|
|email|string|null: false,add_index: true,unique: true|
|password|string|null: false|
|family_name|string|null: false|
|first_name|string|null: false|
|family_name_kana|string|null: false|
|first_name_kana|string|null: false|
|birth_day|date|null: false|

### Association
- has_many :items dependent::destroy
- has_one :destination dependent::destroy
- has_one :credit_card dependent::destroy

## destinationテーブル
|Column|Type|Options|
|------|----|-------|
|family_name|string|null: false|
|first_name|string|null: false|
|family_name_kana|string|null: false|
|first_name_kana|string|null: false|
|post_code|string|null: false|
|prefecture|string|null: false|
|city|string|null: false|
|adress_number|integer|null: false|
|building_name|string||
|phone_number|integer||
|user_id|reference|null: false, foreign_key: true|

### Association
- belongs_to :user

## credit_cardテーブル
|Column|Type|Options|
|------|----|-------|
|card_number||integer|null: false|
|expiration_year|integer|null: false|
|expiration_month|integer|null: false|
|security_code|integer|null: false|
|user_id|reference|null: false , foreign_key: true|

### Association
- belongs_to :user

## itemsテーブル
|Column|Type|Options|
|------|----|-------|
|name|string|null: false|
|price|integer|null: false|
|description|text|null: false|
|brand|string|null:false|
|status|string|null: false|
|postage|integer|null: false|
|shipping_area|string|null: false|
|shipping_days|integer|null: false|
|user_id|reference|null:false , foreign_key:true)

### Association
- belongs_to :user
- belongs_to :category dependent: :destroy
- has_many :images dependent: :destroy

## categoryテーブル
|Column|Type|Options|
|------|----|-------|
|name|string|null: false|
|ancestry|string||

### Association
- has_many :items 

## imagesテーブル
|Column|Type|Options|
|------|----|-------|
|image_url|string|null: false|
|items_id|referense|null:false , foreign_key:true)|

### Association
- belongs_to :items 