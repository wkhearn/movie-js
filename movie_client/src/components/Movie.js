import React from 'react'
import { Table } from 'semantic-ui-react'


const Movie = (props) =>  {
  return(
    <Table.Row>
      <Table.Cell>{props.movieDetails.title}</Table.Cell>
      <Table.Cell>{props.movieDetails.year}</Table.Cell>
      <Table.Cell>{props.movieDetails.rated}</Table.Cell>
      <Table.Cell>{props.movieDetails.runtime}</Table.Cell>
    </Table.Row>
  )
}

export default Movie
