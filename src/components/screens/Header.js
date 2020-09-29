import React, { Component } from 'react'
import { Menu, Segment } from 'semantic-ui-react'
import {Link} from "react-router-dom";


export default class MenuExampleSecondaryPointing extends Component {
  state = { activeItem: 'home' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <div>
        <Menu pointing secondary>
          <Menu.Item
            name='home'
            active={activeItem === 'home'}
            onClick={this.handleItemClick}
            // as={Link} to={''}
          />
          <Menu.Item
            name='messages'
            active={activeItem === 'messages'}
            onClick={this.handleItemClick}
            >
                
            </Menu.Item>
          <Menu.Item
            name='friends'
            active={activeItem === 'friends'}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            name='Create Ticket'
            active={activeItem === 'Create Ticket'}
            onClick={this.handleItemClick}
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

    
      </div>
    )
  }
}