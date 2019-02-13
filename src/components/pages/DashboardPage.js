import React, { Component } from 'react';
import {Redirect} from "react-router-dom";
import { connect } from 'react-redux';
import { withAuthService } from '../hoc';
import { SwapiServiceProvider } from "../../components/context";
import { SwapiService } from "../../services";

import Dashboard from '../Dashboard';

class DashboardPage extends Component {
  render() {
    const { loggedIn } = this.props;
    if(!loggedIn) {
      return <Redirect to="/login" />
    }

    return (
      <SwapiServiceProvider value={SwapiService}>
        <Dashboard />
      </SwapiServiceProvider>
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
