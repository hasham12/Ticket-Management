import React from 'react'
import Cards from './Card'
import ModalForm from './Modal'
import Parent from './Parent'
import FormP from './CreateProjectForm'
import AccordinProjectForm from './AccordinProjectForm'

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

    // handleOpen = () => this.setState({ Modal: this.state.Modal });
    render(){
        return(
            <>
            <Cards Clickme={this.onCardClick} />
            <ModalForm OpenModal = {this.state.Modal} > 
            <FormP/>
            {/* <AccordinProjectForm/> */}
            </ModalForm>
            {/* <Parent/> */}
            </>
        )
    }
}