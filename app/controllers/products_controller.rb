class ProductsController < ApplicationController
  def index
    @category_parent_array = Category.where(ancestry:nil)
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
    @category_id = @item.category_id
    @category_parent = Category.find(@category_id).parent.parent
    @category_child = Category.find(@category_id).parent
    @category_grandchild = Category.find(@category_id)
  end

  
  def get_category_children
    @category_children = Category.find("#{params[:parent_id]}").children
  end

  def get_category_grandchildren
    @category_grandchildren = Category.find("#{params[:child_id]}").children
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
