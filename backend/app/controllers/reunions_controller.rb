class ReunionsController < ApplicationController
  before_action :set_reunion, only: [:show, :update, :destroy]

  # GET /reunions
  def index
    @reunions = Reunion.all

    render json: @reunions
  end

  # GET /reunions/1
  def show
    render json: @reunion
  end

  # POST /reunions
  def create
    @reunion = Reunion.new(reunion_params)

    if @reunion.save
      render json: @reunion, status: :created, location: @reunion
    else
      render json: @reunion.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /reunions/1
  def update
    if @reunion.update(reunion_params)
      render json: @reunion
    else
      render json: @reunion.errors, status: :unprocessable_entity
    end
  end

  # DELETE /reunions/1
  def destroy
    @reunion.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_reunion
      @reunion = Reunion.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def reunion_params
      params.require(:reunion).permit(:name, :year)
    end
end
