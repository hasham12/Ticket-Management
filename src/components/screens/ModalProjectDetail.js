import React from 'react'
import { Button, Modal } from 'semantic-ui-react'
import CreateProjectFrom from './CreateProjectForm'
import Card from './AfterCreateProject'

export default class ModalForm extends React.Component{
    constructor(props){
        super(props)
        
    }
    
    state = {
        modalOpen: false,
      };
        
      handleOpen = () => this.setState({ modalOpen: true });
    
      handleClose = () => this.setState( { modalOpen: false });

      componentWillReceiveProps(nextprops){
        debugger;
          console.log('HEllo I am Receive Props', nextprops)
          this.setState({
              modalOpen : nextprops.OpenModal
          })
      
      }

    render(){
  return (
    <Modal
    //   trigger={<Button>Show Modal</Button>}
      header='Create Project Form'
      content={this.props.children}
      closeIcon
      open={this.state.modalOpen}
      onClose = {this.handleClose}
      
    //   actions={['Snooze', { key: 'done', content: 'Done', positive: true }]}
    />

  )
}
}
