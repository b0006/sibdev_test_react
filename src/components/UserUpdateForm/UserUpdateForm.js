import React, { Component } from 'react';
import { connect } from 'react-redux';
import { usersActions } from "../../actions";
import serviceStatic from "../../serviceStatic";

class UserUpdateForm extends Component {
  state = {
    fullname: '',
    services: [],
    serviceList: [],
    submitted: false
  };

  componentDidUpdate(prevProps, prevState, snapshot) {
    const { activeUser } = this.props;
    const fullname = activeUser ? activeUser.fullname : null;
    const login = activeUser ? activeUser.login : null;
    if (prevProps.activeUser !== this.props.activeUser) {
      this.setState({
        fullname,
        login,
        submitted: false
      });
    }
  }

  componentDidMount(t) {
    const { activeUser } = this.props;
    const fullname = activeUser ? activeUser.fullname : null;
    const login = activeUser ? activeUser.login : null;
    this.setState({
      fullname,
      login,
      submitted: false
    });
  }

  onCloseForm = () => {
    const { delUserForUpdate } = this.props;
    delUserForUpdate();
  };

  onFullnameChange = (event) => {
    this.setState({
      fullname: event.target.value
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
      const { update } = this.props;
      update(fullname, login, serviceList);
    }
  };

  render() {
    const { error, activeUser } = this.props;
    const { submitted, serviceList } = this.state;
    let userServices = getUserServiceList(activeUser.services);

    const servicesCheckbox =
      <div className="uk-margin uk-width-1-2@m">
        <label className="uk-form-label">Services</label>
        <div className="uk-form-controls" onChange={this.onServiceChange}>
          {
            userServices.map(item => (
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
      </div>;

    const errorService = submitted && serviceList.length === 0
      ? <span>Choose service</span>
      : null;

    return (
      <div>
        <form
          className="uk-margin-large"
          onSubmit={this.onSubmit}
        >
          <fieldset className="uk-fieldset">
            <legend className="uk-legend">Edit user</legend>
            {error}
            {errorService}
            <div className="uk-margin uk-width-1-2@m">
              <label className="uk-form-label">Fullname</label>
              <div className="uk-form-controls">
                <input className="uk-input" type="text" onChange={this.onFullnameChange} defaultValue={this.state.fullname}/>
              </div>
            </div>

            {servicesCheckbox}

          </fieldset>

          <input className="uk-button uk-button-default" type="submit" value="Edit" onClick={this.onSubmit}/>
          <input className="uk-button uk-button-default" type="button" value="Close" onClick={this.onCloseForm}/>
        </form>
      </div>
    )
  }
}

const getUserServiceList = (userServices) => {
  const newArray = [];

  for(let i = 0; i < serviceStatic.length; i++) {
    for(let j = 0; j < userServices.length; j++) {
      if(serviceStatic[i].value === userServices[j].value) {
        newArray[i] = {
          checked: true,
          value: serviceStatic[i].value,
          name: serviceStatic[i].name
        };
      }
    }

    if(!newArray[i]) {
      newArray[i] = {
        checked: false,
        value: serviceStatic[i].value,
        name: serviceStatic[i].name
      };
    }
  }

  return newArray;
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
  update: usersActions.update,
  delUserForUpdate: usersActions.delUserForUpdate
};

export default connect(mapStateToProps, mapDispatchToProps)(UserUpdateForm);
