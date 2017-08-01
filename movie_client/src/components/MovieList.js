import React from 'react'
import Movie from './Movie'
import { Table, Container } from 'semantic-ui-react'
import Searchbox from './SearchBox'
import Checkboxes from './Checkboxes'

class MovieList extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      dateToggle: "",
      runTimeToggle: ""
    }
  }

  dateHandler = (event) => {
    this.dateSorter()
    this.dateToggle()
  }

  dateToggle = () => {
    this.setState({runTimeToggle: ""})
    if (this.state.dateToggle === "descending") {
      this.setState({dateToggle: "ascending"})
    } else {
      this.setState({dateToggle: "descending"})
    }
  }

  dateSorter = () => {
    if (this.state.dateToggle === "ascending") {
      console.log(this.state.dateToggle)
      let sorted = this.props.userMovieList.sort((a, b) => {
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
    } else {
      console.log(this.state.dateToggle)
      let sorted = this.props.userMovieList.sort((a, b) => {
         var dateA = a.year
         var dateB = b.year
         if (dateA > dateB) {
           return -1
         }
         if (dateA < dateB) {
           return 1
         }
         return 0
      })
      return sorted
    }
  }

  // ************************

  runTimeHandler = (event) => {
    this.runTimeSorter()
    this.runTimeToggle()
  }

  runTimeToggle = () => {
    this.setState({dateToggle: ""})
    if (this.state.runTimeToggle === "descending") {
      this.setState({runTimeToggle: "ascending"})
    } else {
      this.setState({runTimeToggle: "descending"})
    }
  }

  runTimeSorter = () => {
    if (this.state.runTimeToggle === "ascending") {
      let sorted = this.props.userMovieList.sort((a, b) => {
         var dateA = a.runtime
         var dateB = b.runtime
         if (dateA < dateB) {
           return -1
         }
         if (dateA > dateB) {
           return 1
         }
         return 0
      })
      return sorted
    } else {
      console.log(this.state.runTimeToggle)
      let sorted = this.props.userMovieList.sort((a, b) => {
         var dateA = a.runtime
         var dateB = b.runtime
         if (dateA > dateB) {
           return -1
         }
         if (dateA < dateB) {
           return 1
         }
         return 0
      })
      return sorted
    }
  }



  render(){
    let movieList = null

    if (this.state.dateToggle === "ascending" ||
        this.state.dateToggle === "descending") {
      movieList = this.dateSorter()
    } else if (this.state.runTimeToggle === "ascending" ||
              this.state.runTimeToggle === "descending") {
                movieList = this.runTimeSorter()
              } else {
      movieList = this.props.userMovieList
    }

    return(
      <Container>
        <Searchbox searchHandler={this.props.searchHandler}/>
        <Checkboxes checkBoxHandler={this.props.checkBoxHandler}/>
        <Table color="yellow" padded={true}>
          <Table.Header>
            <Table.HeaderCell>Title</Table.HeaderCell>
            <Table.HeaderCell onClick={this.dateHandler}>Year</Table.HeaderCell>
            <Table.HeaderCell>Rated</Table.HeaderCell>
            <Table.HeaderCell onClick={this.runTimeHandler}>Runtime</Table.HeaderCell>
          </Table.Header>
          {this.props.userMovieList && movieList.map((movie)=> {
            return <Movie movieDetails={movie} />
          })}
        </Table>
      </Container>
    )
  }
}
export default MovieList
