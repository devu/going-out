import React, { Component } from 'react';

export default class User extends Component {
  
  constructor(props) {
    super(props);

    //for simplicity user class has internal state to visualy show selection
    //but we don't need to redo entire list on each selection since is static
    this.state = {
      active:false
    }

    this.activateUserToogle =  this.activateUserToogle.bind(this);
  }

  activateUserToogle(){
    if(this.state.active){
      this.setState( {active:false} );
    } else {
      this.setState( {active:true} );
    }
    
    this.props.onUserSelect(this.props.item);
  }

  render() {
    let isActive = (this.state.active) ? 'list-item active' : 'list-item';
    return (
      <div onClick={this.activateUserToogle} className={isActive}>
        { this.props.item.name }
      </div>
    );
  }
}