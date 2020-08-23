class ItemsController < ApplicationController
  def index
  end

  def new
    if user_signed_in?
      @product = Product.new
      @product.images.new
    else
      redirect_to root_path
    end
  end

  def create
    @product = Product.new(product_params)
    if @product.images.present? && @product.valid?
      @product.save
      redirect_to root_path
    else
      render :new
    end
  end
end
