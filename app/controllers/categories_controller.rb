class CategoriesController < ApplicationController
  #before_action :set_parents, only: [:new, :create]
#
  #def set_parents
  #  @parents = Category.where(ancestry: nil)
  #end
#
   def show
 
    
    respond_to do |format|
      format.html
      format.json do
          @children = Category.find(params[:parent_id]).child
      end
    end

   end
#
  #format.json do
  #  if params[:parent_id]
  #    @children = Category.find(params[:parent_id]).child
  #  elsif params[:children_id]
  #    @grandChildren= Category.find(params[:children_id]).children
  #  end
  #end
#


　