import React from 'react'
import { Form, Input, Button } from 'semantic-ui-react'


const APISearchBox = (props) => {
  return (
    <Form onSubmit={props.submitAPISearchHandler}>
      <Form.Group>
        <Form.Input placeholder='Title...' name='name' onChange={props.APITitleHandler} />
        <Form.Input placeholder='Year...' name='email' onChange={props.APIYearHandler} />
        <Form.Button type='submit' content='Search' />
      </Form.Group>
    </Form>
  )
}
export default APISearchBox
