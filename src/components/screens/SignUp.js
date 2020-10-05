import React from 'react'
import { Button, Form, Grid, Header, Image, Message, Segment, Select } from 'semantic-ui-react'
import axios from 'axios'

const type = [
  { key: 'c', text: 'Client', value: 'client' },
  { key: 'm', text: 'Manager', value: 'manager' },
  { key: 'd', text: 'Developer', value: 'developer' },
]

export default class SignUp extends React.Component{
    constructor(){
        super()
    }

    state = {
      Name : '',
      Password : '',
      Email : '',
      Type : '',
    };

    handleSubmit = event => {
      const data = {
        Name : this.state.Name,
        Email : this.state.Email,
        Password : this.state.Password,
        Type : this.state.Type
      }
      console.log(data)
      axios.post('http://localhost:51282/api/user/insert',data).then(res => {
        console.log(res);
        console.log(res.data);
        window.location = '/'
      }).catch(err => {
        alert(err);
      })
    }

    handleChange = event =>{
      console.log('Imput Field',event.target.value)
      this.setState({
        Name : event.target.value
      })
    }

    handleEmail = event => {
      console.log('Email Field',event.target.value)
      this.setState({
        Email: event.target.value
      })
    }

    handlePass = event =>{
      console.log('Password Field', event.target.value)
      this.setState({
        Password: event.target.value
      })
    }

    handleType = (e, { value } )=>{
      
      console.log('Type Field', value)
      this.setState({
        Type: value
      })
    }

    render(){
        return(
            <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
            <Grid.Column style={{ maxWidth: 450 }}>
              <Header as='h1' color='teal' textAlign='center'>
                <Image src='/logo.png' /> 
                Try TeMajo for free
              </Header>
              <p style={{color:'teal', fontSize: 16}}>
                  Please use your work email address so we can connect you with your team in TeMajo.
              </p>
              <Form size='large' onSubmit ={this.handleSubmit}>
                <Segment stacked>
                  <Form.Input fluid icon='user' iconPosition='left' name='Name' placeholder='Name' onChange ={this.handleChange} />
                  <Form.Input fluid icon='mail' iconPosition='left' name='Email' placeholder='E-mail address' onChange ={this.handleEmail} />
                  <Form.Input type="password" fluid icon='key' iconPosition='left' name='Password' placeholder='Password' onChange ={this.handlePass} />
                  {/* <span  icon='users' >  */}
                  <Form.Select options={type} fluid iconPosition='left'  name='Type' placeholder='Select Type'  
                  onChange ={this.handleType}
                  // onChange={(e, { value }) => this.setState({Type: value})}
                  /> 
             
                  
        
                  <Button type='submit' color='teal' fluid size='large'>
                    Try For Free
                  </Button>
                </Segment>
              </Form>
              <Message>
                Already Register? <a href='/'>Login</a> or <a href="#">Forget Password</a>
              </Message>
            </Grid.Column>
          </Grid>

        );
    }
}
