import React from 'react'
import { Checkbox } from 'semantic-ui-react'

const Checkboxes = (props) => {
  return(
    <form onClick={props.checkBoxHandler}>
      <Checkbox label='G' />
      <Checkbox label='PG' />
      <Checkbox label='PG-13'  />
      <Checkbox label='R' />
    </form>

  )
}

export default Checkboxes
