import React from 'react'

const SearchBox = (props) => {
  return(
    <form onSubmit={props.submitHandler}>
      <input type="search" onChange={props.searchTermHandler}/>
      <input type="submit" />
    </form>
  )
}

export default SearchBox
