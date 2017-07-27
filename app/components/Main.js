import React from "react";
import { connect } from "react-redux";
import axios from "axios";
import { SEARCH } from "../components/action";
import  ListBars  from "./ListBars.js";


class Main extends React.Component {

  handleSubmit (event) {
        event.preventDefault();
    console.log('input.value is ', this.refs.input.value);
    this.yelpSearch(this.refs.input.value);
  };

  yelpSearch (searchText) {
    var {dispatch} = this.props;
    
      dispatch(
      { type: SEARCH,
      payload: axios.post("/api/yelp", { searchText })   //res.json(businesses)
       });
       
       
      /* 
        return dispatch({
      type: SEARCH,
      payload: axios.post("/api/yelp", { searchText })
    
    })
    */
  };

  render() {

         return (
           <div>
      <form onSubmit={this.handleSubmit.bind(this)}>
      <p>YELP</p>
        <input type="text" placeholder="Enter your search" ref="input"/>
        <br/><br/>
        <button>Search</button>
      </form>
      <ListBars/>
                 </div>

    )
  }
      
}    
      
      
      
      
      
      /*
      
      <div style={{ marginBottom: "40px" }}>
        <DivCentered text>
          <Form onSubmit={this.handleSubmit}>
            <h1>Welcome to the Nightlife Coordination App</h1>
            <h2>Where are you heading out tonight?</h2>
            <DivA className="ui fluid input">
              <InputB
                innerRef={input => (this.input = input)}
                placeholder="Enter City or Address..."
              />
            </DivA>
            <Button01 type="submit">Search</Button01>
          </Form>
        </DivCentered>
      </div>
    );
  }
}
*/


Main = connect()(Main)
export default Main;
