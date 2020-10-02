import React, { Component } from 'react'
import { Form } from 'semantic-ui-react'

const options = [
  { key: 'm', text: 'Male', value: 'male' },
  { key: 'f', text: 'Female', value: 'female' },
  { key: 'o', text: 'Other', value: 'other' },
]

class FormExampleSubcomponentControl extends Component {
  state = {}

  handleChange = (e, { value }) => {
    console.log('Imput Field',e.target.value)
      this.setState({ value })
}

//   handleChange = event => {
//     console.log('Imput Field',event.target.value)
//     this.setState({
//       Name : event.target.value
//     })
//   }

  render() {
    const { value } = this.state
    return (
      <Form>
        <Form.Group widths='equal'>
          <Form.Input fluid label='First name' placeholder='First name' />
          <Form.Input fluid label='Last name' placeholder='Last name' />
          <Form.Select
            fluid
            label='Gender'
            options={options}
            placeholder='Gender'
            value={options.find(obj => obj.value)} // set selected value
            onChange={this.handleChange} 
          />
           {/* <Select
        placeholder="Select Option"
        value={data.find(obj => obj.value === selectedValue)} // set selected value
        options={data} // set list of the data
        onChange={handleChange} // assign onChange function
      /> */}
        </Form.Group>
        <Form.Group inline>
          <label>Size</label>
          <Form.Radio
            label='Small'
            value='sm'
            checked={value === 'sm'}
            onChange={this.handleChange}
          />
          <Form.Radio
            label='Medium'
            value='md'
            checked={value === 'md'}
            onChange={this.handleChange}
          />
          <Form.Radio
            label='Large'
            value='lg'
            checked={value === 'lg'}
            onChange={this.handleChange}
          />
        </Form.Group>
        <Form.TextArea label='About' placeholder='Tell us more about you...' />
        <Form.Checkbox label='I agree to the Terms and Conditions' />
        <Form.Button>Submit</Form.Button>
      </Form>
    )
  }
}

export default FormExampleSubcomponentControl