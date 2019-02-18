import React, { Component } from 'react';
import {Redirect} from "react-router-dom";
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Dashboard from '../Dashboard';

class DashboardPage extends Component {
  render() {
    const { loggedIn } = this.props;
    if(!loggedIn) {
      return <Redirect to="/login" />
    }

    return (
      <Dashboard />
    )
  }
}

const mapStateToProps = (state) => {
  const { loggedIn } = state.authentication;
  return {
    loggedIn
  };
};

DashboardPage.propTypes = {
  loggedIn: PropTypes.bool.isRequired
};

export default connect(mapStateToProps)(DashboardPage)

