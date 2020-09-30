import React, { Component } from 'react'
import { Menu, Segment } from 'semantic-ui-react'
import {Link} from "react-router-dom";
import Error from './Error'


export default class MenuExampleSecondaryPointing extends Component {
  state = { activeItem: 'home' }

//   handleItemClick = (e, { name }) => this.setState({ activeItem: name })

handleItemClick = (e ) => this.setState({ activeItem: e })

  render() {
    const { activeItem } = this.state

    return (
      <div>
        <Menu pointing secondary>
          <Menu.Item
            name='home'
            active={activeItem === 'home'}
            onClick={()=>this.handleItemClick('home')}
            // as={Link} to={''}
          />
          <Menu.Item
            name='messages'
            active={activeItem === 'messages'}
            onClick={()=>this.handleItemClick('messages')}
            >
                
            </Menu.Item>
          <Menu.Item
            name='friends'
            active={activeItem === 'friends'}
            // onClick={this.handleItemClick}
            onClick={()=>this.handleItemClick('friends')}
          />
          <Menu.Item
            name='Create Ticket'
            active={activeItem === 'Create Ticket'}
            // onClick={this.handleItemClick}
            onClick={()=>this.handleItemClick('Create Ticket')}
          />
          <Menu.Menu position='right'>
            <Menu.Item
              name='logout'
              active={activeItem === 'logout'}
              onClick={this.handleItemClick}
              as={Link} to={'/'}
            />
          </Menu.Menu>
        </Menu>

        
        {
        this.state.activeItem == 'home' ? <div>Home</div> : 
        this.state.activeItem == 'messages' ? <div>Message</div>:
        this.state.activeItem == 'friends' ? <div>Friends</div>:
        this.state.activeItem == 'Create Ticket' ? <div>Message</div>: null
        }
        

    
      </div>
    )
  }
}