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

  def update
    movie = MovieList.find(params[:id])
    movie.rating = movie_list_params["rating"]
    movie.save
    render json: {message: 'saved from the controller', status: 200}
  end

  def show
    render json: movie = MovieList.find(params[:id])
  end

  private

  def movie_list_params
    params.require(:movie_list).permit(:movie_id, :user_id, :rating)
  end
end
