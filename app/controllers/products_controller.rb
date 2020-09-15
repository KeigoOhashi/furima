class ProductsController < ApplicationController
  def index
    @parents = Category.where(ancestry:nil)
    @products = Product.includes(:images).order('created_at DESC')
  end

  def new


    # if user_signed_in?   #一旦バリデーション外し中
      @product = Product.new
      @product.images.new
    # else
      # redirect_to root_path
    # end

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

  def purchase
    @product_buyer= Product.find(params[:id])
    if @product_buyer.update(buyer_id: current_user.id)
      redirect_to purchased_product_path
      # 更新に成功した時の処理
    else
      render :purchase
      # 更新に失敗した時の処理
    end
  end

  private
    def product_params
      params.require(:product).permit(:name,:price,:description,:brand,:status,:postage,:shipping_area,:shipping_days,images_attributes: [:product_image,:_destroy,:id]).merge(user_id: current_user.id)
    end
    
  end
end
