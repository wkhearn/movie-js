require 'httparty'


OMDBAPI = "http://www.omdbapi.com/?t="
APIKEY = "&apikey=a93a4d24"
OMDBPOSTERAPI = "http://www.img.omdbapi.com/?t="

# url = 'https://api.spotify.com/v1/search?type=artist&q=tycho'

class Api::V1::MoviesController < ApplicationController

  def index
    render json: Movie.all
  end

  def show
    render json: Movie.find(params[:id])
  end

  def create
    search_title = movie_params["title"].strip
    search_year = "&y=" + movie_params["year"].to_s

    # Fetch to OMDB w/ HTTParty
    (!movie_params["year"].empty?) ? response = HTTParty.get(OMDBAPI + search_title + search_year + APIKEY) : response = HTTParty.get(OMDBAPI + search_title + APIKEY)
    # parse data to make usable
    new_json = response.parsed_response

    # Check to see if movie already exists in local database
    current_movie = Movie.find_by(title: new_json["Title"])
    if current_movie
      render json: Movie.find_by(title: new_json["Title"])
    else
      # Find or create director to associate with movie
      director = Director.find_or_create_by(name: new_json["Director"])

      # Find or create actors to associate with movie
      actors = new_json["Actors"].split(', ').map { |actor| Actor.find_or_create_by(name: actor)}

      # Create movie and associate with director
      movie = Movie.create(title: new_json["Title"], director_id: director.id, year: new_json["Year"], rated: new_json["Rated"], runtime: new_json["Runtime"].split(' ')[0].to_i, poster: new_json["Poster"], plot: new_json["Plot"])

      # Associate actors with movies via ActorMovies
      actors.map { |actor| ActorMovie.create(actor_id: actor.id, movie_id: movie.id) }

      # Associates the movie with ther user. This needs to be changed to current_user_id instead of just 1.
      # movie_save = MovieList.create(movie_id: movie.id, user_id: 1)

      render json: movie
    end
  end

  private

  def movie_params
    params.require(:movie).permit(:title, :year)
  end
end
