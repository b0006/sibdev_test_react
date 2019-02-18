import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { authActions, usersActions } from "../../actions";

import UserListMenu from '../UserListMenu';

class Navbar extends Component {

  onLogout = () => {
    const { logout, removeAll } = this.props;
    logout();
    removeAll();
  };

  render() {
    const { loggedIn, user } = this.props;

    const loginLink = !loggedIn ?
      <li><Link to="/login">Login</Link></li> : null;
    const logoutLink = loggedIn ?
      <li onClick={this.onLogout}><Link to="/logout">{user.login}, logout</Link></li> : null;

    const userMenu = loggedIn ? <UserListMenu /> : null;

    return (
      <nav className="uk-navbar-container" data-uk-navbar="true">
        <div className="uk-navbar-left">
          <Link to="/" className="uk-navbar-item uk-logo">Home</Link>
        </div>

        <div className="uk-navbar-right">
          <ul className="uk-navbar-nav">
            { loginLink }
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
  return {
    loggedIn,
    user
  };
};

const mapDispatchToProps = {
  logout: authActions.logout,
  removeAll: usersActions.removeAll
};

export default connect(mapStateToProps, mapDispatchToProps)(Navbar)

