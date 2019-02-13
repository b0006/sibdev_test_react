import React, { Component } from 'react';
import { connect } from 'react-redux';
import {usersActions} from "../../actions";

class UserList extends Component {

  onDelete = (login) => {
    const { remove } = this.props;
    remove(login);
  };

  render() {
    const { userList } = this.props;
    const showTitle = userList.length > 0
      ? <h2>User list</h2> : null;

    return (
      <div>
        { showTitle }
        <ul className="uk-list uk-list-striped uk-child-width-1-4@m" data-uk-grid>
          {
            userList.map(item => (
              <div className=""
                key={item.login}>
                <li>
                  {item.fullname}
                </li>
                <input className="uk-button uk-button-default" type="button" onClick={() => {this.onDelete(item.login)}} value="Delete" />
              </div>
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

