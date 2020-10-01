import React, { Component } from 'react'
import { Button, Form, Grid, Header, Image, Message, Segment, Container } from 'semantic-ui-react'
import axios from 'axios'


export default class TestGet extends Component{
    state = {
        persons: [],
    };

    componentDidMount(){
        console.log('Screen TestGet')
        axios.get("http://localhost:51282/api/user/User_data") // where the api gets fetched from that API
          .then(res=>{
            console.log(res);
            this.setState({ persons: res.data});
          }).catch(
              e => {
                  console.log(e)
              }
          )
      }

    render(){
        return(
            <Container>
            {this.state.persons.map(person=> <li key={person.Id}>{person.Name}</li>)}
        {/* {this.state.persons.map(person=><li key = {person.id}>{person.name}</li>)} */}
      </Container>
        );
    }
}

