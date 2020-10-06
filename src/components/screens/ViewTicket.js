import React from 'react'
import { Header, Table, Rating, Icon } from 'semantic-ui-react'

export default class ViewTickets extends React.Component{
    constructor(){
        super()
    }
    render(){
        return(
            <>
            <Header as='h2'>
    <Icon name='ticket' />
    <Header.Content>Tickets Deatils</Header.Content>
  </Header>
            <Table celled padded compact selectable sortable>
    <Table.Header>
      <Table.Row>
        <Table.HeaderCell singleLine>Client</Table.HeaderCell>
        <Table.HeaderCell>Title</Table.HeaderCell>
        <Table.HeaderCell>Status</Table.HeaderCell>
        <Table.HeaderCell>Generate Date</Table.HeaderCell>
        <Table.HeaderCell>Expected Date</Table.HeaderCell>
        <Table.HeaderCell>Ticket Details</Table.HeaderCell>
      </Table.Row>
    </Table.Header>

    <Table.Body>
      <Table.Row>
        <Table.Cell>
          <Header as='h2' textAlign='center'>
            Gul Ahmed
          </Header>
        </Table.Cell>
        <Table.Cell singleLine>Power Output</Table.Cell>
        <Table.Cell>
          <Rating icon='star' defaultRating={3} maxRating={3} />
        </Table.Cell>
        <Table.Cell textAlign='center'>
          1/10/2020
        </Table.Cell>
        <Table.Cell>
        <Table.Cell  singleLine>12/10/2020</Table.Cell>
        </Table.Cell>
        <Table.Cell>
          Creatine supplementation is the reference compound for increasing
          muscular creatine levels; there is variability in this increase,
          however, with some nonresponders.
        </Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell>
          <Header as='h2' textAlign='center'>
            Takaful
          </Header>
        </Table.Cell>
        <Table.Cell singleLine>Weight</Table.Cell>
        <Table.Cell>
          <Rating icon='star' defaultRating={3} maxRating={3} />
        </Table.Cell>
        <Table.Cell textAlign='center'>
        1/10/2020
        </Table.Cell>
        <Table.Cell>
        <Table.Cell  singleLine>12/10/2020</Table.Cell>
        </Table.Cell>
        <Table.Cell>
          Creatine is the reference compound for power improvement, with numbers
          from one meta-analysis to assess potency
        </Table.Cell>
      </Table.Row>
    </Table.Body>
    
  </Table>
    </>
    )
    }
  
}
