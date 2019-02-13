import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from "react-router-dom";
import UserAddForm from '../UserAddForm';
import ItemList from '../ItemList';

class SettingPage extends Component {
  render() {
    console.log(this.props);

    const { loggedIn } = this.props;
    if(!loggedIn) {
      return <Redirect to="/login" />
    }

    return (
      <div>
        <h2>Setting page</h2>
        <UserAddForm />
        {/*<ItemList items={}/>*/}
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

