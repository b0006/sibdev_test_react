import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from "react-router-dom";
import UserSettingForm from '../UserSettingForm';
import UserList from '../UserList';

class SettingPage extends Component {
  render() {
    const { loggedIn } = this.props;
    if(!loggedIn) {
      return <Redirect to="/login" />
    }

    return (
      <div>
        <h2>Setting page</h2>
        <UserSettingForm />
        <UserList />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  const { loggedIn } = state.authentication;
  const { userList } = state.users;
  return {
    loggedIn,
    userList
  };
};

export default connect(mapStateToProps)(SettingPage);

