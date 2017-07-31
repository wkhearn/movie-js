import React from 'react'
import { Checkbox } from 'semantic-ui-react'

const Checkboxes = (props) => {
  return(
    <div>
      <Checkbox label='G' />
      <Checkbox label='PG' />
      <Checkbox label='PG-13' onChange={props.checkBoxHandler} />
      <Checkbox label='R' />
    </div>

  )
}

export default Checkboxes
