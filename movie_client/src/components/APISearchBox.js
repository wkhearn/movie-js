import React from 'react'
import { Form } from 'semantic-ui-react'

// <Form.Button size='small' type='submit' content='Search' />

const APISearchBox = (props) => {
  return (
    <Form fitted onSubmit={props.submitAPISearchHandler}>
      <Form.Group>
        <Form.Input placeholder='Search Movies: Title...' name='title' onChange={props.APITitleHandler} />
        <Form.Input placeholder='Year...' name='year' onChange={props.APIYearHandler} />
      </Form.Group>
    </Form>
  )
}
export default APISearchBox
