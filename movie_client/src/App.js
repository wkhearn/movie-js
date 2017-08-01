import React from 'react'
import MovieList from './components/MovieList'
import NavBar from './components/NavBar'

class App extends React.Component {
  constructor(){
    super()
    this.state = {
      userMovieList: [],
      searchTerm: '',
      APITitleTerm: '',
      APIYearTerm: '',
      dateSorter: false,
      checked: false,
      checkValue: [],
      currentSearchMovie: {}
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
    this.searchFilter()
  }

  APITitleHandler = (event) => {
    const APITitleTerm = event.target.value
    this.setState({ APITitleTerm })
  }

  APIYearHandler = (event) => {
    const APIYearTerm = event.target.value
    this.setState({ APIYearTerm })
  }

  submitAPISearchHandler = (event) => {
    event.preventDefault()
    fetch("http://localhost:3000/api/v1/movies",
          {
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          method: "POST",
          body: JSON.stringify({'title': this.state.APITitleTerm, 'year': this.state.APIYearTerm})
          })
    .then(resp => resp.json())
    .then(resp => this.setState({
      currentSearchMovie: resp
    }))
  }

  saveMovieHandler = (event) => {
    event.preventDefault()
    fetch("http://localhost:3000/api/v1/movie_lists",
          {
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          method: "POST",
          body: JSON.stringify({'movie_id': this.state.currentSearchMovie.id})
          })
    .then(resp => resp.json())
    .then(resp => this.setState({
      userMovieList: [...this.state.userMovieList, resp]
    }))
    window.location.reload()
  }

  searchFilter = () => {
      const filteredMovies = this.state.userMovieList.filter((movie) => {
       return movie.title.toUpperCase().includes(this.state.searchTerm.toUpperCase()) ||
       movie.year.toString().includes(this.state.searchTerm) ||
       movie.rated.toUpperCase().includes(this.state.searchTerm.toUpperCase())
    })
    return filteredMovies
  }

  checkBoxFilter = (event) => {
    const checkBoxFilter = this.searchFilter().filter((rating)=> {
      return this.state.checkValue.includes(rating.rated)
    })
    return checkBoxFilter
  }

  checkBoxHandler = (event) => {
    let value = event.target.innerText
    if (this.state.checkValue.includes(value)){
      let index = this.state.checkValue.indexOf(value)
      this.state.checkValue.splice(index, 1)
    } else {
      this.state.checkValue.push(value)
    }

    if (this.state.checkValue.length > 0) {
      this.setState({checked : true})
    } else {
      this.setState({checked : false})
    }
    this.render()
  }


  dateSorter = () => {
    const sorted = this.searchFilter().sort((a, b) => {
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
    return sorted
  }


  render(){
    let listToPass = null

    if (this.state.checked) {
      listToPass = this.checkBoxFilter()
    } else {
      listToPass = this.searchFilter()
    }

    return(
      <div>
        <NavBar
          currentSearchMovie={this.state.currentSearchMovie}
          APITitleHandler={this.APITitleHandler}
          APIYearHandler={this.APIYearHandler}
          submitAPISearchHandler={this.submitAPISearchHandler}
          saveMovieHandler={this.saveMovieHandler} />
        <MovieList userMovieList={listToPass}
          searchHandler={this.searchHandler}
          dateSorter={this.dateSorter}
          dateHandler={this.dateHandler}
          checkBoxHandler={this.checkBoxHandler}/>
      </div>
    )
  }
}

export default App
