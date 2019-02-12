import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { withAuthService } from '../hoc';
import { authActions } from "../../actions";

class Navbar extends Component {
  onLogout = () => {
    const { logout } = this.props;
    logout();
  };

  render() {
    const { loggedIn, user } = this.props;

    const loginLink = !loggedIn ?
      <li><Link to="/login">Login</Link></li> : null;
    const logoutLink = loggedIn ?
      <li onClick={this.onLogout}><a>{user.login}, logout</a></li> : null;

    return (
      <div>
        <nav className="uk-navbar-container" uk-navbar="true">
          <div className="uk-navbar-left">
            <Link to="/" className="uk-navbar-item uk-logo">Home</Link>
          </div>

          <div className="uk-navbar-right">
            <ul className="uk-navbar-nav">
              { loginLink }
              <li>
                <Link to="/dash/">Dashboard</Link>
                <div className="uk-navbar-dropdown">
                  <ul className="uk-nav uk-navbar-dropdown-nav">
                    <li><Link to="/sw/">Star wars</Link></li>
                    <li><Link to="/cats/">Cats</Link></li>
                    <li><Link to="/punks/">Punks</Link></li>
                  </ul>
                </div>
              </li>
              <li><Link to="/settings">Settings</Link></li>
              { logoutLink }
            </ul>
          </div>
        </nav>
      </div>
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
  logout: authActions.logout
};

export default withAuthService()(
  connect(mapStateToProps, mapDispatchToProps)(Navbar)
);
