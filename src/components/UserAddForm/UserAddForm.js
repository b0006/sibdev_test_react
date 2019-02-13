import React, { Component } from 'react';
import { connect } from 'react-redux';
import { usersActions } from "../../actions";

class UserAddForm extends Component {
  state = {
    fullname: '',
    login: '',
    services: []
  };

  onFullnameChange = (event) => {
    this.setState({
      fullname: event.target.value
    })
  };

  onLoginChange = (event) => {
    this.setState({
      login: event.target.value
    })
  };

  onServiceChange = (event) => {
    const { services } = this.state;
    let index = 0;

    let newServices = [];

    if (event.target.checked) {
      newServices = newServices.concat(services, event.target.value);
    } else {
      index = services.indexOf(event.target.value);
      newServices = [...services.slice(0, index), ...services.slice(index + 1)];
    }

    this.setState({ services: newServices });
  };

  onSubmit = (event) => {
    event.preventDefault();
    const { fullname, login, services } = this.state;
    if(fullname && login && services.length > 0){
      const { add } = this.props;
      add(fullname, login, services);
    }
  };

  render() {
    const { hasError, errorMsg } = this.props;
    const error = hasError ? <span>{errorMsg}</span> : null;

    return (
      <form
        className="uk-form-horizontal uk-margin-large"
        onSubmit={this.onSubmit}
      >
        <fieldset className="uk-fieldset">

          <legend className="uk-legend">New user</legend>

          {error}

          <div className="uk-margin uk-width-1-2@m">
            <label className="uk-form-label">Fullname</label>
            <div className="uk-form-controls">
              <input className="uk-input" type="text" onChange={this.onFullnameChange}/>
            </div>
          </div>

          <div className="uk-margin uk-width-1-2@m">
            <label className="uk-form-label">Login</label>
            <div className="uk-form-controls">
              <input className="uk-input" type="text" onChange={this.onLoginChange}/>
            </div>
          </div>

          <div className="uk-margin uk-width-1-2@m">
            <label className="uk-form-label">Services</label>
            <div className="uk-form-controls" onChange={this.onServiceChange}>
              <label><input className="uk-checkbox"
                            type="checkbox"
                            value="sw"
              /> Star Wars</label>
              <label><input className="uk-checkbox"
                            type="checkbox"
                            value="cats"
              /> Cats</label>
              <label><input className="uk-checkbox"
                            type="checkbox"
                            value="punks"
              /> Punks</label>
            </div>
          </div>

        </fieldset>

        <input className="uk-button uk-button-default" type="submit" value="Add" />
      </form>
    )
  }
}

const mapStateToProps = (state) => {
  const { userList, hasError, errorMsg } = state.users;
  return {
    userList,
    hasError,
    errorMsg
  };
};

const mapDispatchToProps = {
  add: usersActions.add
};

export default connect(mapStateToProps, mapDispatchToProps)(UserAddForm);
