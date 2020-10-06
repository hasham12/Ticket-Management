import React from 'react'
import { Card } from 'semantic-ui-react'
import ModalForm from './Modal'

const items = [
  {
    href:'#card-example-link-card',
    header: 'Add Module',
    description:
      'Create a new project for client.',
    meta: 'ROI: 30%',
  },
  {
        href:'#card-example-link-card',
    header:'Add Developer',
    meta:'Friend',
    description:'Elliot is a sound engineer living in Nashville who enjoys playing guitar and hanging with his cat.'
  },
]

// const Clickme =()=> {
//     alert('click me');
//     // <ModalForm/>
// }

export default class CardsA extends React.Component{
  constructor(){
    super()
  }

  render(){
    return(
      <Card.Group href='#card-example-link-card' centered items={items}  onClick={this.props.Clickme}  /> 
    );
  }
}


