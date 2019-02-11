import React, { Component } from 'react';

class LoginPage extends Component {

  onSubmit = (event) => {
    event.preventDefault();

  };

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <h2>Login page</h2>
        <div className="uk-margin">
          <div className="uk-inline">
            <span className="uk-form-icon" uk-icon="icon: user"></span>
            <input className="uk-input" type="text" placeholder="Login"/>
          </div>
        </div>

        <div className="uk-margin">
          <div className="uk-inline">
            <span className="uk-form-icon" uk-icon="icon: lock"></span>
            <input className="uk-input" type="text" placeholder="Password"/>
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

export default LoginPage;

