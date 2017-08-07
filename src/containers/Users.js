import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectUser } from '../actions/index';
import {bindActionCreators} from 'redux';

import User from '../components/User';

class Users extends Component {
  
  constructor(props) {
    super(props);

    this.onUserSelect =  this.onUserSelect.bind(this);
  }

  onUserSelect(item){
    this.props.selectUser(item, this.props.users);
  }

  populateList(){
      return this.props.users.map(item => {
          return ( 
              <User onUserSelect={this.onUserSelect} item={item} key={item.name}></User>
          );
      });
  }

  render() {
    return (
      <div>
        <span>
          <h1>Who is going out?</h1>
        </span>
        <div className="list">
          { this.populateList() }
        </div>
      </div>
    );
  }
}

function mapStateTopProps(state){
  return {
    users:state.users
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return bindActionCreators( {selectUser: selectUser}, dispatch);
}

export default connect(mapStateTopProps, mapDispatchToProps)(Users);