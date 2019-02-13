import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { withAuthService } from '../hoc';
import { authActions, usersActions } from "../../actions";

import MenuDropdown from '../MenuDropdown';

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
      <li onClick={this.onLogout}><a href="#">{user.login}, logout</a></li> : null;

    const services = [
      {link: '/sw/', name: 'Star Wars'},
      {link: '/cats/', name: 'Cats'},
      {link: '/punks/', name: 'Punks'}
    ];

    const users = [
      {link: '/', name: 'User 1'}
    ];

    const dashboardMenu = loggedIn ?
      <MenuDropdown items={services} link="/dash/" title="Dashboard" /> : null;

    const userMenu = loggedIn ?
      <MenuDropdown items={users} link="/settings/" title="Users" /> : null;

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
  return {
    loggedIn,
    user
  };
};

const mapDispatchToProps = {
  logout: authActions.logout,
  removeAll: usersActions.removeAll
};

export default withAuthService()(
  connect(mapStateToProps, mapDispatchToProps)(Navbar)
);
