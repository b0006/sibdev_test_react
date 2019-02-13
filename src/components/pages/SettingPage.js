import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from "react-router-dom";
import UserAddForm from '../UserAddForm';

class SettingPage extends Component {
  render() {
    const { loggedIn } = this.props;
    if(!loggedIn) {
      return <Redirect to="/login" />
    }

    return (
      <div>
        <h2>Setting page</h2>
        <UserAddForm />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  const { loggedIn } = state.authentication;
  return {
    loggedIn
  };
};

export default connect(mapStateToProps)(SettingPage);

