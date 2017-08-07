import "../sass/main.scss";

import React, { Component } from 'react';
import Users from '../containers/Users';
import Venues from '../containers/Venues';

// app component
export default class App extends Component {
  
  constructor(props) {
    super(props);
  }

  //nothing fancy, two lists users and venues
  render() {
    return (
      <div className="container">
        <Users/>
        <Venues/>
      </div>
    );
  }
}
