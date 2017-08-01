import React from 'react'
import Movie from './Movie'
import { Table, Container } from 'semantic-ui-react'
import Searchbox from './SearchBox'
import APISearchBox from './APISearchBox'

const MovieList = (props) => {


  return(
    <Container>
      <APISearchBox APITitleHandler={props.APITitleHandler} APIYearHandler={props.APIYearHandler} submitAPISearchHandler={props.submitAPISearchHandler}/><br/><br/>
      <Searchbox searchHandler={props.searchHandler}/>
      <Table color="yellow" padded={true}>
        <Table.Header>
          <Table.HeaderCell>Title</Table.HeaderCell>
          <Table.HeaderCell onClick={props.dateSorter}>Year</Table.HeaderCell>
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
