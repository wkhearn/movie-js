import React, { Component } from 'react';
import './App.css';
import SearchBox from './components/SearchBox'
import Movie from './components/Movie'



class App extends Component {
  constructor() {
    super()
    this.state = {
      movieList: [],
      searchResults: [],
      searchTerm: ''
    }
  }

  componentDidMount(){
    fetch('http://localhost:3000/api/v1/movies/')
    .then(res=>res.json())
    .then(movieList=>(this.setState({movieList})))
  }

  submitHandler = (event) => {
    event.preventDefault()
    this.movieFilter()
  }

  fetchNewMovie = () => {
    fetch(`http://www.omdbapi.com/?t=${this.state.searchTerm}`+'&apikey=a93a4d24')
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

  render() {
    return (
    <div>
      <SearchBox submitHandler={this.submitHandler} searchTermHandler={this.searchTermHandler} />
      <Movie searchResults={this.state.searchResults}/>
    </div>
    );
  }
}

export default App;
