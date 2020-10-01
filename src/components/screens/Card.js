import React from 'react'
import { Card } from 'semantic-ui-react'

const items = [
  {
    href:'#card-example-link-card',
    header: 'Create Project',
    description:
      'Leverage agile frameworks to provide a robust synopsis for high level overviews.',
    meta: 'ROI: 30%',
  },
  {
        href:'#card-example-link-card',
    header:'Elliot Baker',
    meta:'Friend',
    description:'Elliot is a sound engineer living in Nashville who enjoys playing guitar and hanging with his cat.'
  },
]

const Clickme =()=> {
    alert('click me');
}

const Cards = () => <Card.Group href='#card-example-link-card' centered items={items} onClick={Clickme} />

export default Cards

// import React from 'react'
// import { Card } from 'semantic-ui-react'

// const Cards = () => (
//   <Card
//     href='#card-example-link-card'
//     header='Elliot Baker'
//     meta='Friend'
//     description='Elliot is a sound engineer living in Nashville who enjoys playing guitar and hanging with his cat.'
//   />
// )

// export default Cards