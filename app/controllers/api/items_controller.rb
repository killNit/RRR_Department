class Api::ItemsController < ApplicationController
before_action :set_section

def index
  render json: @section.items
end

def show

end

def create
  item =@section.items.new(item_params)
  if(item.save)
    render json: item
  else
    render json: item.errors, status: 422;
  end
end
  




  private 

  def item_params
    params.require(:item).permit(:name, :price,:section_id)
  end
  def set_section 
    @section = Section.find(params[:section_id])
  end
end
