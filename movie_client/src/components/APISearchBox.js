import React from 'react'
import { Form, Input, Button } from 'semantic-ui-react'


const APISearchBox = (props) => {
  return (
    <Form size='tiny' onSubmit={props.submitAPISearchHandler}>
      <Form.Group>
        <Form.Input placeholder='Search Movies: Title...' name='title' onChange={props.APITitleHandler} />
        <Form.Input placeholder='Year...' name='year' onChange={props.APIYearHandler} />
        <Form.Button size='small' type='submit' content='Search' />
      </Form.Group>
    </Form>
  )
}
export default APISearchBox
