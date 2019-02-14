import React, { Component } from 'react';
import { connect } from 'react-redux';
import { usersActions } from "../../actions";
import serviceStatic from "../../serviceStatic";

class UserAddForm extends Component {
  state = {
    fullname: '',
    login: '',
    services: [],
    serviceList: []
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
    const { fullname, login, services, serviceList } = this.state;
    if(fullname && login && services.length > 0){
      const { add } = this.props;
      add(fullname, login, serviceList);
    }
  };

  render() {
    const { error } = this.props;

    return (
      <div>
        <form
          className="uk-margin-large"
          onSubmit={this.onSubmit}
        >
          <fieldset className="uk-fieldset">
            <legend className="uk-legend">New user</legend>
            {error}
            <div className="uk-margin uk-width-1-2@m">
              <label className="uk-form-label">Fullname</label>
              <div className="uk-form-controls">
                <input className="uk-input" type="text" onChange={this.onFullnameChange} />
              </div>
            </div>

            <div className="uk-margin uk-width-1-2@m">
              <label className="uk-form-label">Login</label>
              <div className="uk-form-controls">
                <input className="uk-input" type="text" onChange={this.onLoginChange} />
              </div>
            </div>

            <div className="uk-margin uk-width-1-2@m">
              <label className="uk-form-label">Services</label>
              <div className="uk-form-controls" onChange={this.onServiceChange}>
                {
                  serviceStatic.map(item => (
                    <label key={item.value}>
                      <input type="checkbox"
                             className="uk-checkbox"
                             value={item.value}
                      />
                      {item.name}
                    </label>
                  ))
                }
              </div>
            </div>

          </fieldset>

          <input className="uk-button uk-button-default" type="submit" value="Add" />
        </form>
      </div>
    )
  }
}

const setServiceList = (arServices) => {
  const newServiceList = [];

  serviceStatic.map(item => {
    if(arServices.indexOf(item.value) !== -1) {
      newServiceList.push(item);
    }
  });

  return newServiceList;
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
