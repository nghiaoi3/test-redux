import React from "react";
import { connect } from "react-redux";


var mapStateToProps = state => ({
  data: state.clublist.data,
  loading: state.clublist.loading,
});



class ListBars extends React.Component {
        
  render() {
    
var {data} = this.props;
console.log('data of List '+data)


    return (   <table>   {data.businesses.map(business => {
  <tr>
    <td key={business.name}>{business.name}</td>
    <td key={business.address}>{business.address}</td>
  </tr>    })}
  </table>

);

  }
}

ListBars = connect()(ListBars)
export default ListBars;




        