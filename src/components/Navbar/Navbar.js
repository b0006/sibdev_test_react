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
    return (
      <div>
        <nav className="uk-navbar-container" uk-navbar="true">
          <div className="uk-navbar-left">
            <Link to="/" className="uk-navbar-item uk-logo">Home</Link>

            <div className="uk-navbar-item">
              <form action="javascript:void(0)">
                <input className="uk-input uk-form-width-small" type="text" placeholder="Input" />
                  <button className="uk-button uk-button-default">Button</button>
              </form>
            </div>
          </div>

          <div className="uk-navbar-right">
            <ul className="uk-navbar-nav">
              <li className="uk-active">
                <Link to="/login">Login</Link>
              </li>
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
              <li onClick={this.onLogout}><a>Logout</a></li>
            </ul>
          </div>
        </nav>
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

const mapDispatchToProps = {
  logout: authActions.logout
};

export default withAuthService()(
  connect(mapStateToProps, mapDispatchToProps)(Navbar)
);
