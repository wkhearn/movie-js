import React from 'react'

const SearchBox = (props) => {
  return(
    <form onSubmit={props.submitHandler}>
      Search for Movie: <input type="search" onChange={props.searchTermHandler}/>
      <input type="button" value="Search Movie" />
    <br></br>
    <br></br>
      <input type="button" onClick={props.saveMovieHandler} value="Save Movie"/>
    </form>
  )
}

export default SearchBox
