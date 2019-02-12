import React, { Component } from 'react';
import {Redirect} from "react-router-dom";
import { connect } from 'react-redux';
import { withAuthService } from '../../hoc';

class DashboardPage extends Component {
  render() {
    const { loggedIn } = this.props;
    if(!loggedIn) {
      return <Redirect to="/login" />
    }

    return (
      <div>Dash</div>
    )
  }
}

const mapStateToProps = (state) => {
  const { loggedIn } = state.authentication;
  return {
    loggedIn
  };
};

export default withAuthService()(
  connect(mapStateToProps)(DashboardPage)
);
