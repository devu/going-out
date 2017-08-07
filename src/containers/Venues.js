import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Venue from '../components/Venue';

class Venues extends Component {
  
  constructor(props) {
    super(props);
  }

  populateToGoList(){
      return this.props.venues.map(item => {
        if(item.goodToGo){
          return ( 
              <Venue item={item} key={item.name}>{item.name}</Venue>
          );
        }
      });
  }

  populateAvoidList(){
      return this.props.venues.map(item => {
        if(!item.goodToGo){
          return ( 
              <Venue item={item} key={item.name}>{item.name}</Venue>
          );
        }
      });
  }

  render() {
    return (
      <div>
        <span><h1>Places to go:</h1></span>
        <div className="list">
          { this.populateToGoList() }
        </div>
        <span><h1>Places to avoid:</h1></span>
        <div className="list">
          { this.populateAvoidList() }
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
    return { 
      venues: state.venues
    }
}

export default connect(mapStateToProps)(Venues);