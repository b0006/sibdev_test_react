import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { authActions } from "../../actions";

class LoginPage extends Component {
  state = {
    login: '',
    password: ''
  };

  onLogin = (event) => {
    this.setState({
      login: event.target.value
    });
  };

  onPassword = (event) => {
    this.setState({
      password: event.target.value
    });
  };

  onSubmit = (event) => {
    event.preventDefault();

    const { login, password } = this.state;
    const { signIn } = this.props;

    if (login && password) {
      signIn(login, password);
    }
  };

  render() {
    const { loggedIn } = this.props;
    if(loggedIn) {
      return <Redirect to="/" />
    }

    return (
      <form onSubmit={this.onSubmit}>
        <h2>Login page</h2>
        <div className="uk-margin">
          <div className="uk-inline">
            <span className="uk-form-icon" data-uk-icon="icon: user"></span>
            <input className="uk-input"
                   type="text"
                   placeholder="Login"
                   onChange={this.onLogin}
            />
          </div>
        </div>

        <div className="uk-margin">
          <div className="uk-inline">
            <span className="uk-form-icon" data-uk-icon="icon: lock"></span>
            <input className="uk-input"
                   type="password"
                   placeholder="Password"
                   onChange={this.onPassword}
            />
          </div>
        </div>

        <div className="uk-margin">
          <div className="uk-inline">
            <input className="uk-input" type="submit"/>
          </div>
        </div>
      </form>
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
  signIn: authActions.signIn
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);


