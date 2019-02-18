import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from "react-router-dom";
import PropTypes from 'prop-types';
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
        <h2>Users page</h2>
        <UserSettingForm />
        <UserList />
      </div>
    )
  }
}

SettingPage.propTypes = {
  loggedIn: PropTypes.bool.isRequired
};

const mapStateToProps = (state) => {
  const { loggedIn } = state.authentication;
  const { userList, activeUser } = state.users;
  return {
    loggedIn,
    userList,
    activeUser
  };
};

export default connect(mapStateToProps)(SettingPage);

