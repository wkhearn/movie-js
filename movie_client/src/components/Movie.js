import React from 'react'
import { Table } from 'semantic-ui-react'
import { Header, Icon, Image, Modal } from 'semantic-ui-react'


class Movie extends React.Component {

  state = {
    actors: [],
    director: []
  }

  componentDidMount(){
    fetch(`http://localhost:3000/api/v1/movies/${this.props.movieDetails.id}`)
      .then(res => res.json())
      .then(data => this.setState({
        actors: data.actors,
        director: data.director
      }))
  }

  render(){
    return(

      <Table.Row>
          <Modal trigger={<Table.Cell><a href="#">{this.props.movieDetails.title}</a></Table.Cell>} closeIcon='close'>
            <Modal.Header>{this.props.movieDetails.title}</Modal.Header>
              <Modal.Content image>
                <Image wrapped size='large' src={this.props.movieDetails.poster} />
                  <Modal.Description>
                      <h4>Plot</h4>
                      <p>{this.props.movieDetails.plot}</p>
                      <h4>Year</h4>
                      <p>{this.props.movieDetails.year}</p>
                      <h4>Runtime</h4>
                      <p>{this.props.movieDetails.runtime} minutes</p>
                      <h4>Rated</h4>
                      <p>{this.props.movieDetails.rated}</p>
                      <h4>Actors</h4>
                      {this.state.actors && this.state.actors.map((actor) => {
                        return <p>{actor.name}</p>
                      })}
                      <h4>Director(s)</h4>
                      <p>{this.state.director.name}</p>
                  </Modal.Description>
              </Modal.Content>
            <Modal.Actions>
            </Modal.Actions>
          </Modal>

        <Table.Cell>{this.props.movieDetails.year}</Table.Cell>
        <Table.Cell>{this.props.movieDetails.rated}</Table.Cell>
        <Table.Cell>{this.props.movieDetails.runtime}</Table.Cell>

      </Table.Row>
    )
  }
}

export default Movie
