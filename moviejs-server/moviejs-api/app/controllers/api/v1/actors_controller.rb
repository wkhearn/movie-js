class Api::V1::ActorsController < ApplicationController
  def index
    render json: Actor.all
  end
end
