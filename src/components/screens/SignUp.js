import React from 'react'
import { Button, Form, Grid, Header, Image, Message, Segment, Select } from 'semantic-ui-react'

const options = [
  { key: 'c', text: 'Client', value: 'client' },
  { key: 'm', text: 'Manager', value: 'manager' },
  { key: 'd', text: 'Developer', value: 'developer' },
]

export default class SignUp extends React.Component{
    constructor(){
        super()
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
              <Form size='large'>
                <Segment stacked>
                  <Form.Input fluid icon='user' iconPosition='left' placeholder='Name' />
                  <Form.Input type="password" fluid icon='key' iconPosition='left' placeholder='Password' />
                  <Form.Input fluid icon='mail' iconPosition='left' placeholder='E-mail address' />
                  {/* <span  icon='users' >  */}
                  <Form.Select fluid iconPosition='left' options={options} placeholder='Select Type'   control={Select} /> 
                  {/* </span> */}
                 
                  
        
                  <Button color='teal' fluid size='large'>
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
