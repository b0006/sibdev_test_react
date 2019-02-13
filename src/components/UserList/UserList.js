import React, { Component } from 'react';
import { connect } from 'react-redux';
import {usersActions} from "../../actions";

class UserList extends Component {

  onShow = (login) => {

  };

  onDelete = (login) => {
    const { remove } = this.props;
    remove(login);
  };

  render() {
    const { userList } = this.props;
    console.log(userList);
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
                        <li key={'service_' + service + '_' + item.login } >{service}</li>
                      ))
                    }
                  </ul>
                  <input className="uk-button uk-button-primary" type="button" onClick={() => {this.onShow(item.login)}} value="Show" />
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
  remove: usersActions.remove
};

export default connect(mapStateToProps, mapDispatchToProps)(UserList);

