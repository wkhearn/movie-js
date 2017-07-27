import React from 'react'

const Movie = (props) => {
  let obj = Object.entries(props.searchResults)
  return(
    <div>
      {obj[0] ? obj[0][1] : 'nah' }<br/>
      {obj[0] ? obj[1][1] : 'nah' }<br/>
      {obj[0] ? obj[6][1] : 'nah' }<br/>
      {obj[0] ? obj[8][1] : 'nah' }
    </div>
  )
}


export default Movie
