import React from 'react'
import { Button, Modal } from 'semantic-ui-react'
import CreateProjectFrom from './CreateProjectForm'
import card from './Card'

export default class ModalForm extends React.Component{
    constructor(){
        super()
    }

    state = {
        modalOpen: false,
      };
        
      handleOpen = () => this.setState({ modalOpen: true });
    
      handleClose = () => this.setState(console.log('Test'), { modalOpen: false });

      componentWillReceiveProps(nextprops){
          console.log('HEllo I am Receive Props', nextprops)
          this.setState({
              modalOpen : nextprops.OpenModal
          })
        //   this.state.modalOpen = nextprops.OpenModal
      }

    render(){
  return (
    <Modal
    //   trigger={<Button>Show Modal</Button>}
      header='Create Project Form'
      content={this.props.children}
      closeIcon
      open={this.props.OpenModal}
    //   onClose = {this.props.handleClose}
      
    //   actions={['Snooze', { key: 'done', content: 'Done', positive: true }]}
    />

  )
}
}
