import React, { Component } from 'react';
import './App.css';
import SearchBox from './components/SearchBox'
import Movie from './components/Movie'
import User from './components/User'

const OURAPI = "http://localhost:3000/api/v1/"
const OMDBAPI = "http://www.omdbapi.com/?t=+"
const APIKEY = "&apikey=a93a4d24"
const OMDBPOSTERAPI = "http://www.img.omdbapi.com/?t="

// TODO: Movie poster is from a different API
// TODO: Poster API request needs to add "img" in front of link

class App extends Component {
  constructor() {
    super()
    this.state = {
      movieList: [],
      searchResults: [],
      searchTerm: '',
      userData: []
    }
  }

  componentDidMount(){
    fetch(OURAPI + 'movies')
    .then(res=>res.json())
    .then(movieList=>(this.setState({movieList})))
    this.fetchUser()
  }

  submitHandler = (event) => {
    event.preventDefault()
    this.movieFilter()
  }

  fetchNewMovie = () => {
    fetch(OMDBAPI + this.state.searchTerm + APIKEY)
    .then(res => res.json())
    .then(searchResults => this.setState({searchResults}))
  }

  movieFilter = () => {
    const searchResults = this.state.movieList.filter((movie)=>{
      return movie.title.toUpperCase().includes(this.state.searchTerm.toUpperCase())
    })
    if (searchResults.length >= 1) {
      this.setState({searchResults})
    } else {
      this.fetchNewMovie()
    }
  }

  searchTermHandler = (event) => {
    this.setState({
      searchTerm: event.target.value
    })
  }

  fetchUser = () => {
    fetch(OURAPI + "users/1")
    .then(res => res.json())
    .then(userData => this.setState({ userData }))
  }


  // addMovie = (user, movie) => {
  //   const movieListDetails = {
  //     user: `${user.id}`,
  //     movie: `${movie.id}`
  //   }
  //   const sendToOurApi = {
  //     headers: {'Content-type': 'application/json'},
  //     method: 'POST',
  //     body: JSON.stringify(movieListDetails)
  //   }
  //   fetch(OURAPI, sendToOurApi)
  //     .then(res => res.json())
  //     .then(console.log("Something"))
  // }
  //
  // saveMovieHandler = (event) => {
  //   this.addMovie()
  // }


  render() {

    return (
    <div>
      <SearchBox submitHandler={this.submitHandler} searchTermHandler={this.searchTermHandler} saveMovieHandler={this.saveMovie}/>
      <Movie searchResults={this.state.searchResults}/>
      <User userData={this.state.userData}/>
    </div>
    );
  }
}

export default App;
