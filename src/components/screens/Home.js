import React from 'react'
import Cards from './Card'
import ModalForm from './Modal'
import Parent from './Parent'
import FormP from './CreateProjectForm'
import AccordinProjectForm from './AccordinProjectForm'
import ViewTickets from './ViewTicket'
import { Header, Table, Rating, Container } from 'semantic-ui-react'

export default class Home extends React.Component{
    state ={
        Modal: false
    };

    onCardClick =(e) => {
        this.setState(
            {
                Modal: true
            }
        )
    }

    handleForm = (e) => {
        alert('I Click')
        window.location = '/AfterProject'
    }

    // handleOpen = () => this.setState({ Modal: this.state.Modal });
    render(){
        return(
            <Container>
            <Cards Clickme={this.onCardClick} />
            <ModalForm OpenModal = {this.state.Modal} > 
            <FormP handleSubmitForm={this.handleForm}/>
            </ModalForm>
            <ViewTickets/>
            {/* <Parent/> */}
            </Container>
        )
    }
}