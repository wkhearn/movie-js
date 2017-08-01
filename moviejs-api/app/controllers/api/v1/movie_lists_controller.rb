class Api::V1::MovieListsController < ApplicationController
  def index
    render json: MovieList.all
  end

  def create
    if !MovieList.find_by(movie_id: movie_list_params["movie_id"])
      new_list = MovieList.create(movie_id: movie_list_params["movie_id"], user_id: 1)
      movie = Movie.find_by(id: new_list.movie_id)
      render json: movie
    end
  end

  private

  def movie_list_params
    params.require(:movie_list).permit(:movie_id, :user_id)
  end
end
