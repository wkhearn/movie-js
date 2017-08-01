import React from 'react'
import MovieList from './components/MovieList'
import { Button } from 'semantic-ui-react'


class App extends React.Component {
  constructor(){
    super()
    this.state = {
      userMovieList: [],
      searchTerm: '',
      dateSorter: false
    }
  }

  componentDidMount(){
    fetch('http://localhost:3000/api/v1/users/1')
    .then(response=>response.json())
    .then(data=>(this.setState({userMovieList: data.movies})))
  }

  searchHandler = (event) => {
    const searchTerm = event.target.value
    this.setState({ searchTerm })
    this.movieFilter()
  }

  movieFilter = () => {
    if (this.state.userMovieList) {
      const filteredMovies = this.state.userMovieList.filter((movie) => {
         return movie.title.toUpperCase().includes(this.state.searchTerm.toUpperCase()) ||
         movie.year.toString().includes(this.state.searchTerm) ||
         movie.rated.toUpperCase().includes(this.state.searchTerm.toUpperCase())
      })
      return filteredMovies
    }
  }

  dateSorter = () => {
    if (this.state.userMovieList) {
      const sorted = this.movieFilter().sort((a, b) => {
         var dateA = a.year
         var dateB = b.year
         if (dateA < dateB) {
           return -1
         }
         if (dateA > dateB) {
           return 1
         }
         return 0
      })
      this.setState({dateSorter: true})
      return sorted
    }
  }

  // modalTrigger = (event) => {
  //   fetch(OMDBPOSTERAPI)
  //   .then(response=>response.json())
  //   .then(data=>(this.setState({userMovieList: data.movies})))
  // }


  render(){
    let listToPass = null

    if (this.state.dateSorter) {
      listToPass = this.movieFilter()
    } else {
      listToPass = this.dateSorter()
    }

    return(
      <div>
        <MovieList userMovieList={listToPass}
          searchHandler={this.searchHandler}
          dateSorter={this.dateSorter}/>
        {/* <MovieModal modalTrigger={this.modalTrigger} /> */}
      </div>
    )
  }
}

export default App
