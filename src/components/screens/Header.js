import React, { Component } from 'react'
import { Menu, Segment } from 'semantic-ui-react'
import {Link} from "react-router-dom";
import Error from './Error'
import Home from './Home'
import ViewProject from './ViewProjectCardTiles'
import CardsA from './AfterCreateProject'

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
            name='View Projects'
            active={activeItem === 'View Projects'}
            onClick={()=>this.handleItemClick('View Projects')}
            >
                
            </Menu.Item>
          <Menu.Item
            name='CardsA'
            active={activeItem === 'CardsA'}
            // onClick={this.handleItemClick}
            onClick={()=>this.handleItemClick('CardsA')}
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
        this.state.activeItem == 'home' ? <Home/> : 
        this.state.activeItem == 'View Projects' ? <ViewProject/>:
        this.state.activeItem == 'CardsA' ? <CardsA/>:
        this.state.activeItem == 'Create Ticket' ? <div>Message</div>: null
        }
        

    
      </div>
    )
  }
}