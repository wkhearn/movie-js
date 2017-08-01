import React from 'react'
import Movie from './Movie'
import { Table, Container } from 'semantic-ui-react'
import Searchbox from './SearchBox'

const MovieList = (props) => {
  return(
    <Container>
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
