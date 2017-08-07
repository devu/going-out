import React, { Component } from 'react';

export default class Venue extends Component {
  
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="list-item">
        {this.props.item.name}
      </div>
    );
  }
}