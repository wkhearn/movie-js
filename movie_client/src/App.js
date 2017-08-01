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
      userMovieList: [...this.state.userMovieList, resp],
      currentSearchMovie: resp
    }))
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
    if (event) {
      const checkBoxFilter = this.searchFilter().filter((rating)=> {
        return rating.rated === event.target.innerText
      })
      return checkBoxFilter
    } else {
      return this.searchFilter()
    }
  }

  checkBoxHandler = (event) => {
    this.checkBoxFilter(event)
    this.checkToggler()
  }

  checkToggler = () => {
    if (this.state.checked === true) {
      this.setState({checked: false})
    } else {
      this.setState({checked: true})
    }
  }

  dateHandler = (event) => {
    this.dateToggle()
  }

  dateToggle = () => {
    if (this.state.dateSorter) {
      this.setState({dateSorter: false})
    } else {
      this.setState({dateSorter: true})
    }
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

    if (this.state.dateSorter) {
      listToPass = this.dateSorter()
    } else if (this.state.checked){
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
          submitAPISearchHandler={this.submitAPISearchHandler}/>
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
