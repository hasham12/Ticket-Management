import React from 'react'
import { Card, Container, Grid } from 'semantic-ui-react'

export default class ViewProject extends React.Component{
    constructor(){
        super()
    }
    render(){
        return(
            <Container textAlign='center' style={{marginTop:'50px'}}>
        {/* <Card
    href='#card-example-link-card'
    header='Elliot Baker'
    meta='Friend'
    description='Elliot is a sound engineer living in Nashville who enjoys playing guitar and hanging with his cat.'
  />    */}
  
     {/* <Card.Group itemsPerRow={4}>
  <Card raised href='#card-example-link-card' header='Elliot Baker' meta='Friend' description='Elliot is a sound engineer living in Nashville who enjoys playing guitar and hanging with his cat.'  />
  <Card raised href='#card-example-link-card' header='Elliot Baker' meta='Friend' description='Elliot is a sound engineer living in Nashville who enjoys playing guitar and hanging with his cat.'  />
  <Card raised href='#card-example-link-card' header='Elliot Baker' meta='Friend' description='Elliot is a sound engineer living in Nashville who enjoys playing guitar and hanging with his cat.'  />
  <Card raised href='#card-example-link-card' header='Elliot Baker' meta='Friend' description='Elliot is a sound engineer living in Nashville who enjoys playing guitar and hanging with his cat.'  />
  <Card raised href='#card-example-link-card' header='Elliot Baker' meta='Friend' description='Elliot is a sound engineer living in Nashville who enjoys playing guitar and hanging with his cat.'  />
  <Card raised href='#card-example-link-card' header='Elliot Baker' meta='Friend' description='Elliot is a sound engineer living in Nashville who enjoys playing guitar and hanging with his cat.'  />
  <Card raised href='#card-example-link-card' header='Elliot Baker' meta='Friend' description='Elliot is a sound engineer living in Nashville who enjoys playing guitar and hanging with his cat.'  />
  <Card raised href='#card-example-link-card' header='Elliot Baker' meta='Friend' description='Elliot is a sound engineer living in Nashville who enjoys playing guitar and hanging with his cat.'  />
  <Card raised href='#card-example-link-card' header='Elliot Baker' meta='Friend' description='Elliot is a sound engineer living in Nashville who enjoys playing guitar and hanging with his cat.'  />
  <Card raised href='#card-example-link-card' header='Elliot Baker' meta='Friend' description='Elliot is a sound engineer living in Nashville who enjoys playing guitar and hanging with his cat.'  />
  <Card raised href='#card-example-link-card' header='Elliot Baker' meta='Friend' description='Elliot is a sound engineer living in Nashville who enjoys playing guitar and hanging with his cat.'  />
  <Card raised href='#card-example-link-card' header='Elliot Baker' meta='Friend' description='Elliot is a sound engineer living in Nashville who enjoys playing guitar and hanging with his cat.'  />
</Card.Group> */}

<Grid relaxed columns={6}>
<Card.Group itemsPerRow={4}>
    <Grid.Column mobile={16} tablet={8} computer={4}>
    <Card raised href='#card-example-link-card' header='Elliot Baker' meta='Friend' description='Elliot is a sound engineer living in Nashville who enjoys playing guitar and hanging with his cat.'  />
    </Grid.Column>
    <Grid.Column mobile={16} tablet={8} computer={4}>
    <Card raised href='#card-example-link-card' header='Elliot Baker' meta='Friend' description='Elliot is a sound engineer living in Nashville who enjoys playing guitar and hanging with his cat.'  />
    </Grid.Column>
    <Grid.Column mobile={16} tablet={8} computer={4}>
    <Card raised href='#card-example-link-card' header='Elliot Baker' meta='Friend' description='Elliot is a sound engineer living in Nashville who enjoys playing guitar and hanging with his cat.'  />
    </Grid.Column>
    <Grid.Column mobile={16} tablet={8} computer={4}>
    <Card raised href='#card-example-link-card' header='Elliot Baker' meta='Friend' description='Elliot is a sound engineer living in Nashville who enjoys playing guitar and hanging with his cat.'  />
    </Grid.Column>
    </Card.Group>
    <Card.Group itemsPerRow={4}>
    <Grid.Column mobile={16} tablet={8} computer={4}>
    <Card raised href='#card-example-link-card' header='Elliot Baker' meta='Friend' description='Elliot is a sound engineer living in Nashville who enjoys playing guitar and hanging with his cat.'  />
    </Grid.Column>
    <Grid.Column mobile={16} tablet={8} computer={4}>
    <Card raised href='#card-example-link-card' header='Elliot Baker' meta='Friend' description='Elliot is a sound engineer living in Nashville who enjoys playing guitar and hanging with his cat.'  />
    </Grid.Column>
    <Grid.Column mobile={16} tablet={8} computer={4}>
    <Card raised href='#card-example-link-card' header='Elliot Baker' meta='Friend' description='Elliot is a sound engineer living in Nashville who enjoys playing guitar and hanging with his cat.'  />
    </Grid.Column>
    <Grid.Column mobile={16} tablet={8} computer={4}>
    <Card raised href='#card-example-link-card' header='Elliot Baker' meta='Friend' description='Elliot is a sound engineer living in Nashville who enjoys playing guitar and hanging with his cat.'  />
    </Grid.Column>
    </Card.Group>
  </Grid>


  </Container>
        )}
  
        }
