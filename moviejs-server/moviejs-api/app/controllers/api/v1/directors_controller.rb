class Api::V1::DirectorsController < ApplicationController
  def index
    render json: Director.all
  end
end
