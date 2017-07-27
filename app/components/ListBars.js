import React from "react";
import { connect } from "react-redux";



class ListBars extends React.Component {
        
  render() {
    
var {data} = this.props;

    return (   <table>   
  <tr>
    <td key={data.name}>{data.name}</td>
    <td key={data.id}>{data.id}</td>
  </tr>    
  </table>

);

  }
}


export default connect(function(state){
  return {data: state.data}
})(ListBars);


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
    