import React from 'react'
import { Accordion, Button, Form, Segment } from 'semantic-ui-react'

const panels = [
  {
    key: 'details',
    title: 'Optional Details',
    content: {
      as: Form.Input,
      label: 'Maiden Name',
      placeholder: 'Maiden Name',
    },
  }
]

const developer = [
        {
            key: 'Test',
            title: 'Optional Test',
            content: {
              as: Form.Input,
              label: 'Developer',
              placeholder: 'Developer',
            },
    }
]

const modulec = [
    {
        key: 'Module',
        title: 'Optional Module',
        content: {
          as: Form.Input,
          label: 'Module',
          placeholder: 'Developer',
        },
}
]

const AccordinProjectForm = () => (
  <Segment>
    <Form>
      <Form.Group widths={2}>
        <Form.Input label='First Name' placeholder='First Name' />
        <Form.Input label='Last Name' placeholder='Last Name' />
      </Form.Group>
      <Accordion as={Form.Field} panels={panels} />
      <Accordion as={Form.Field} panels={developer}/>
      <Accordion as={Form.Field} panels={modulec}/>

      <Button secondary>Sign Up</Button>
    </Form>
  </Segment>
)

export default AccordinProjectForm