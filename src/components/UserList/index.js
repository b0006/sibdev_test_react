import React, { Component } from 'react';
import { connect } from 'react-redux';
import {usersActions} from "../../actions";

class UserList extends Component {

  onUpdate = (login) => {
    const { setUserForUpdate } = this.props;
    setUserForUpdate(login);
  };

  onDelete = (login) => {
    const { remove, delUserForUpdate } = this.props;
    remove(login);
    delUserForUpdate();
  };

  render() {
    const { userList } = this.props;
    const showTitle = userList.length > 0
      ? <h2>User list</h2> : null;

    return (
      <div>
        { showTitle }
        <ul className="uk-list uk-list-striped">
          {
            userList.map(item => (
              <li key={item.login}>
                <div className="uk-child-width-1-4@m" data-uk-grid>
                  <div>
                    <span>Fullname: {item.fullname}</span>
                    <br />
                    <span>Login: {item.login}</span>
                  </div>
                  <ul>
                    {
                      item.services.map(service => (
                        <li key={'service_' + service.value + '_' + item.login } >{service.name}</li>
                      ))
                    }
                  </ul>
                  <input className="uk-button uk-button-primary" type="button" onClick={() => {this.onUpdate(item.login)}} value="Update" />
                  <input className="uk-button uk-button-default" type="button" onClick={() => {this.onDelete(item.login)}} value="Delete" />
                </div>
              </li>
            ))
          }

        </ul>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  const { userList } = state.users;
  return {
    userList
  };
};

const mapDispatchToProps = {
  remove: usersActions.remove,
  setUserForUpdate: usersActions.setUserForUpdate,
  delUserForUpdate: usersActions.delUserForUpdate
};

export default connect(mapStateToProps, mapDispatchToProps)(UserList);

