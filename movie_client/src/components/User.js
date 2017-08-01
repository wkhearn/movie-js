import React from 'react'

class User extends React.Component {

  shouldRender() {
    if (this.props.userData.movies){
      return (
        <div>
          {this.props.userData.movies.map(movie => {
            return movie.title
          })}
        </div>
      )
    } else {
      return <div>Loading...</div>
    }
  }

  render(){
    return this.shouldRender()
  }
}

export default User
