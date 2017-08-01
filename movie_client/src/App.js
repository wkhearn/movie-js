import React from 'react'
import MovieList from './components/MovieList'
import { Button } from 'semantic-ui-react'

class App extends React.Component {
  constructor(){
    super()
    this.state = {
      userMovieList: [],
      searchTerm: '',
      dateSorter: false,
      checked: false,
      checkValue: []
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

  render(){
    let listToPass = null

    if (this.state.checked) {
      listToPass = this.checkBoxFilter()
    } else {
      listToPass = this.searchFilter()
    }

    return(
      <div>
        <MovieList userMovieList={listToPass}
          searchHandler={this.searchHandler}
          dateHandler={this.dateHandler}
          checkBoxHandler={this.checkBoxHandler}/>
      </div>
    )
  }
}

export default App
