import React from 'react'
import { Input } from 'semantic-ui-react'


const Searchbox = (props) => {
  return (
    <Input
    icon={{ name: 'search', circular: true, link: true }}
    placeholder='Search...'
    onChange={props.searchHandler}
  />
  )
}
export default Searchbox
