rclass CategoriesController < ApplicationController
  before_action :set_category, only: :show

def index
  @products = Product.includes(:images).order("created_at DESC").limit(10)
  @ladies        = Product.category(1..195).recent
  @mens          = Product.category(196..326).recent
  @kids          = Product.category(327..460).recent
  @interior      = Product.category(461..600).recent
  @game          = Product.category(601..660).recent
  @hobby         = Product.category(661..773).recent
  @cosmetics     = Product.category(774..874).recent
  @electronics   = Product.category(875..959).recent
  @sports        = Product.category(960..1000).recent
  #@chanel        = Product.brand(1).recent
  #@louis_vuitton = Product.brand(2).recent
  #@supreme       = Product.brand(3).recent
  #@nike          = Product.brand(4).recent
end

end
