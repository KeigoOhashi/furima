 FactoryBot.define do

  factory :product do
    name                  {"商品"}
    description           {"説明文"}
    status                {1}
    postage               {1}
    shipping_area         {1}
    shipping_days         {1}
    price                 {1000}
    brand                 {"DOLCE&GABBANA"}
    category_id           {1}
    user_id               {1}
    buyer_id              {1}
  end

end