import React from 'react'
import { Table } from 'semantic-ui-react'
import { Header, Icon, Image, Modal } from 'semantic-ui-react'


const Movie = (props) =>  {
  console.log(props)
  return(

    <Table.Row>
        <Modal trigger={<Table.Cell><a href="#">{props.movieDetails.title}</a></Table.Cell>} closeIcon='close'>
          <Modal.Header>{props.movieDetails.title}</Modal.Header>
            <Modal.Content image>
              <Image wrapped size='large' src={props.movieDetails.poster} />
                <Modal.Description>
                    <h4>Plot</h4>
                    <p>{props.movieDetails.plot}</p>
                    <h4>Year</h4>
                    <p>{props.movieDetails.year}</p>
                    <h4>Runtime</h4>
                    <p>{props.movieDetails.runtime} minutes</p>
                    <h4>Rated</h4>
                    <p>{props.movieDetails.rated}</p>
                    <h4>Actors</h4>
                    {props.movieDetails.actors.map((actor) => {
                      return <p>actor.name</p>
                    })}
                    <h4>Director(s)</h4>
                    <p>{props.movieDetails.director}</p>
                </Modal.Description>
            </Modal.Content>
          <Modal.Actions>
          </Modal.Actions>
        </Modal>

      <Table.Cell>{props.movieDetails.year}</Table.Cell>
      <Table.Cell>{props.movieDetails.rated}</Table.Cell>
      <Table.Cell>{props.movieDetails.runtime}</Table.Cell>

    </Table.Row>
  )
}

export default Movie
