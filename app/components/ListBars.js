import React from "react";
import ReactDom from 'react-dom';
import { connect } from "react-redux";

class ListBars extends React.Component {
    constructor(props){
    super(props);
  }
  
  render() {
var {data} = this.props;
    return (   <table>    {data.map(club => {
  <tr>
    <td key={club.name}>{club.name}</td>
    <td key={club.address}>{club.address}</td>
  </tr>    })}
  </table>

);

  }
}

ListBars = connect()(ListBars)
export default ListBars;




        /*
      <Container className="club-list">
        <Table unstackable singleLine selectable style={{ marginTop: "20px" }}>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell width={2}>No Reservations</Table.HeaderCell>
              <Table.HeaderCell width={7}>Club Name</Table.HeaderCell>
              <Table.HeaderCell width={7}>Address</Table.HeaderCell>
            </Table.Row>
          </Table.Header>

          <Table.Body className="hover-pointer">
            {this.props.data.map(club => {
              console.log("club", club);
              return (
                <Table.Row
                  key={club.yelpId}
                  onClick={this.handleClickClub(club.yelpId)}
                >
                  <Table.Cell>{club.noReservations}</Table.Cell>
                  <Table.Cell>
                    {club.name}
                  </Table.Cell>
                  <Table.Cell>{club.address}</Table.Cell>
                </Table.Row>
              );
            })}

          </Table.Body>
        </Table>

      </Container> */
    