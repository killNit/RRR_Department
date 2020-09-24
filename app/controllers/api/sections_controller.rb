class Api::SectionsController < ApplicationController
    before_action :set_section, only: [:show, :update, :destroy]
  
    def index
      render json: Section.all
    end
  
    def show
      render json: @section
    end
  
    def create
      section = Section.new(section_params)
  
      if section.save
        render json: section
      else
        render json: section.errors, status: 422
      end
    end
  
    def update
      if @section.update(section_params)
        render json: @section
      else
        render json: @section.errors, status: 422
      end
    end
  
    def destroy
      @section.destroy
    end
  
    private
      def set_section
        @section = Section.find(params[:id])
      end
  
      def section_params
        params.require(:section).permit(:name)
      end
end
