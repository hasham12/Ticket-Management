import React from 'react'
import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react'
import axios from 'axios'

export default class Login extends React.Component{
    constructor(){
        super()
    }

    state = {
      username: '',
      password: '',
    };

    handleSubmit = event => {
      const data = {
        username : this.state.username,
        password : this.state.password,
      }
      console.log(data)
      axios.post('http://localhost:51282/api/user',data).then(res => {
        console.log(res);
        console.log(res.data);
        window.location = '/Home'
      }).catch(err => {
        alert(err);
      })
    }


    handleUsername = event => {
      console.log('username', event.target.value);
      this.setState({
        username: event.target.value
      })
    }

    handlePassword = event => {
      console.log('password', event.target.value);
      this.setState({
        password: event.target.value
      })
    }

    render(){
        return(
            <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
            <Grid.Column style={{ maxWidth: 450 }}>
              <Header as='h2' color='teal' textAlign='center'>
                <Image src='/logo.png' /> Log-in to your account
              </Header>
              <Form size='large' onSubmit ={this.handleSubmit}>
                <Segment stacked>
                  <Form.Input fluid icon='user' iconPosition='left' name='username' placeholder='E-mail address' onChange={this.handleUsername} />
                  <Form.Input
                    fluid
                    icon='lock'
                    iconPosition='left'
                    placeholder='Password'
                    type='password'
                    name = 'password'
                    onChange ={this.handlePassword}
                  />
        
                  <Button type='submit' color='teal' fluid size='large'>
                    Login
                  </Button>
                </Segment>
              </Form>
              <Message>
                New to us? <a href='/SignUp'>Sign Up</a> or <a href="/ForgetPass">Forget Password</a>
              </Message>
            </Grid.Column>
          </Grid>

        );
    }
}
