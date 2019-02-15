import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { authActions, dashboardActions, usersActions } from "../../actions";

import UserListMenu from '../UserListMenu';

class Navbar extends Component {
  onSetDash = () => {
    const { getServiceData } = this.props;
    getServiceData();
  };

  onLogout = () => {
    const { logout, removeAll } = this.props;
    logout();
    removeAll();
  };

  render() {
    const { loggedIn } = this.props;

    const loginLink = !loggedIn ?
      <li><Link to="/login">Login</Link></li> : null;
    const logoutLink = loggedIn ?
      <li onClick={this.onLogout}><Link to="/logout">Logout</Link></li> : null;

    const dashboardMenu = loggedIn ?
      <li><Link to='/dash' onClick={this.onSetDash}>Dashboard</Link></li> : null;

    const userMenu = loggedIn ? <UserListMenu /> : null;

    return (
      <nav className="uk-navbar-container" data-uk-navbar="true">
        <div className="uk-navbar-left">
          <Link to="/" className="uk-navbar-item uk-logo">Home</Link>
        </div>

        <div className="uk-navbar-right">
          <ul className="uk-navbar-nav">
            { loginLink }
            { dashboardMenu }
            { userMenu }
            { logoutLink }
          </ul>
        </div>
      </nav>
    )
  }
}

const mapStateToProps = (state) => {
  const { loggedIn, user } = state.authentication;
  const { userList } = state.users;
  return {
    loggedIn,
    user,
    userList
  };
};

const mapDispatchToProps = {
  logout: authActions.logout,
  removeAll: usersActions.removeAll,
  getServiceData: dashboardActions.getServiceData
};

export default connect(mapStateToProps, mapDispatchToProps)(Navbar)

