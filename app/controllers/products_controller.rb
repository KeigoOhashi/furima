class ProductsController < ApplicationController
  def index
  end

  def new
    ##if user_signed_in?
      @product = Product.new
      @product.images.new
    ##else
    ##  redirect_to root_path
    ##end
  end

  def create
    @product = Product.new(product_params)
    if @product.images.present? && @product.save
      redirect_to root_path
    else
      render :new
    end

  def show
  end

  private
    def product_params
      params.require(:product).permit(:name,:price,:description,:brand,:status,:postage,:shipping_area,:shipping_days,images_attributes: [:product_image,:_destroy,:id]).merge(user_id: current_user.id)
    end
    
  end
end
