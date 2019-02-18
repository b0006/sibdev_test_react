import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { usersActions } from "../../actions";
import serviceStatic from "../../serviceStatic";

class UserAddForm extends Component {
  state = {
    fullname: '',
    login: '',
    services: [],
    serviceList: [],
    submitted: false
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

    const newServiceList = setServiceList(newServices);

    this.setState({
      services: newServices,
      serviceList: newServiceList
    });
  };

  onSubmit = (event) => {
    event.preventDefault();
    this.setState({
      submitted: true
    });

    const { fullname, login, services, serviceList } = this.state;
    if(fullname && login && services.length > 0){
      const { add } = this.props;
      add(fullname, login, serviceList);
    }
  };

  render() {
    const { error, errorMsg } = this.props;
    const { submitted, serviceList } = this.state;
    const errorService = submitted && serviceList.length === 0
      ? <span>Choose service</span>
      : null;

    const errortext = error ? errorMsg : null;

    return (
      <div>
        <form
          className="uk-margin-large"
          onSubmit={this.onSubmit}
        >
          <fieldset className="uk-fieldset">
            <legend className="uk-legend">New user</legend>
            {errortext}
            {errorService}
            <div className="uk-margin uk-width-1-2@m">
              <label htmlFor="add_fullname" className="uk-form-label">
                Fullname
                <div className="uk-form-controls">
                  <input id="add_fullname" className="uk-input" type="text" onChange={this.onFullnameChange} />
                </div>
              </label>
            </div>

            <div className="uk-margin uk-width-1-2@m">
              <label htmlFor="add_login" className="uk-form-label">
                Login
                <div className="uk-form-controls">
                  <input id="add_login" className="uk-input" type="text" onChange={this.onLoginChange} />
                </div>
              </label>
            </div>

            <div className="uk-margin uk-width-1-2@m">
              <label htmlFor="add_services" className="uk-form-label">
                Services
                <div id="add_services" className="uk-form-controls" onChange={this.onServiceChange}>
                  {
                    serviceStatic.map(item => (
                      <label htmlFor={item.value} key={item.value}>
                        <input id={item.value} type="checkbox" className="uk-checkbox" value={item.value} />
                        {item.name}
                      </label>
                    ))
                  }
                </div>
              </label>
            </div>

          </fieldset>

          <input className="uk-button uk-button-default" type="submit" value="Add" />
        </form>
      </div>
    )
  }
}

UserAddForm.propTypes = {
  add: PropTypes.func.isRequired,
  error: PropTypes.string
};

const setServiceList = (arServices) => {
  return serviceStatic.filter(item =>
    arServices.indexOf(item.value) !== -1
  );
};

const mapStateToProps = (state) => {
  const { userList, hasError, errorMsg, activeUser } = state.users;
  return {
    userList,
    hasError,
    errorMsg,
    activeUser
  };
};

const mapDispatchToProps = {
  add: usersActions.add
};

export default connect(mapStateToProps, mapDispatchToProps)(UserAddForm);
