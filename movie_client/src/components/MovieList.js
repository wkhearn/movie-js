import React from 'react'
import Movie from './Movie'
import { Table, Container } from 'semantic-ui-react'
import Searchbox from './SearchBox'
import APISearchBox from './APISearchBox'
import Checkboxes from './Checkboxes'

const MovieList = (props) => {
  console.log(props.userMovieList)
  return(
    <Container>
      <APISearchBox APITitleHandler={props.APITitleHandler} APIYearHandler={props.APIYearHandler} submitAPISearchHandler={props.submitAPISearchHandler}/><br/><br/>
      <Searchbox searchHandler={props.searchHandler}/>
      <Checkboxes checkBoxHandler={props.checkBoxHandler}/>
      <Table color="yellow" padded={true}>
        <Table.Header>
          <Table.HeaderCell>Title</Table.HeaderCell>
          <Table.HeaderCell onClick={props.dateHandler}>Year</Table.HeaderCell>
          <Table.HeaderCell>Rated</Table.HeaderCell>
          <Table.HeaderCell>Runtime</Table.HeaderCell>
        </Table.Header>
        {props.userMovieList && props.userMovieList.map((movie)=> {
          return <Movie movieDetails={movie} />
        })}
      </Table>
    </Container>
  )
}
export default MovieList
