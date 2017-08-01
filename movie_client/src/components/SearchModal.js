import React from 'react'
import { Icon, Button, Image, Modal } from 'semantic-ui-react'

const SearchModal = (props) => (
  <Modal trigger={<Button onClick={props.submitAPISearchHandler}>Search</Button>}>
    {props.currentSearchMovie.director ? (
      <Modal.Content image>
        <Image wrapped size='big' src={props.currentSearchMovie.poster} />
        <Modal.Description>
          <h3><u>Title</u></h3>
          <p>{props.currentSearchMovie.title}</p>
          <h3><u>Plot</u></h3>
          <p>{props.currentSearchMovie.plot}</p>
          <h3><u>Actors</u></h3>
          {props.currentSearchMovie.actors && props.currentSearchMovie.actors.map((actor) => {
            return <p>{actor.name}</p>
          })}
          <h3><u>Director(s)</u></h3>
          <p>{props.currentSearchMovie.director.name}</p>
          <h3><u>Year</u></h3>
          <p>{props.currentSearchMovie.year}</p>
          <h3><u>Runtime</u></h3>
          <p>{props.currentSearchMovie.runtime} minutes</p>
          <h3><u>Rated</u></h3>
          <p>{props.currentSearchMovie.rated}</p>
        </Modal.Description>
    </Modal.Content>) : null }
    <Modal.Actions>
      <Button primary onClick={props.saveMovieHandler}>
        Save <Icon name='right chevron' />
      </Button>
    </Modal.Actions>
    </Modal>
)

export default SearchModal
