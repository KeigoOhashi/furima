class CategoriesController < ApplicationController
   def show
 
    
    respond_to do |format|
      format.html
      format.json do
          @children = Category.find(params[:parent_id]).child
      end
    end

   end



　