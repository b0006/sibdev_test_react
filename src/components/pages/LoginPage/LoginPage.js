import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { withAuthService } from '../../hoc';

class LoginPage extends Component {
  state = {
    login: '',
    password: '',
    submitted: false
  };

  componentDidMount() {

  }

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

    this.setState({ submitted: true });

    const { login, password } = this.state;
    const { authStoreService } = this.props;

    if (login && password) {
      authStoreService.login(login, password);
    }
  };

  render() {
    const { isLoggedIn } = this.props;
    if(isLoggedIn) {
      return <Redirect to="/" />
    }

    return (
      <form onSubmit={this.onSubmit}>
        <h2>Login page</h2>
        <div className="uk-margin">
          <div className="uk-inline">
            <span className="uk-form-icon" uk-icon="icon: user"></span>
            <input className="uk-input"
                   type="text"
                   placeholder="Login"
                   onChange={this.onLogin}
            />
          </div>
        </div>

        <div className="uk-margin">
          <div className="uk-inline">
            <span className="uk-form-icon" uk-icon="icon: lock"></span>
            <input className="uk-input"
                   type="text"
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

function mapStateToProps(state) {
  const { loggingIn } = state.authentication;
  return {
    loggingIn
  };
}

export default withAuthService()(connect(mapStateToProps)(LoginPage));

