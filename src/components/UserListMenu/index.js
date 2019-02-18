import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { dashboardActions } from "../../actions";

class UserListMenu extends Component {

  setDashboard = (login) => {
    const { getServiceData } = this.props;
    getServiceData(login);
  };

  render() {
    const { userList } = this.props;

    const users = userList.length > 0 ?
      <div className="uk-navbar-dropdown">
        <ul className="uk-nav uk-navbar-dropdown-nav">
          {
            userList.map(user => (
              <li
                key={user.login}
                onClick={() => this.setDashboard(user.login)}
              >
                <Link to={"/dash/" + user.login + '/'}>{user.fullname}</Link>
              </li>
            ))
          }
        </ul>
      </div>
      : null;

    return (
      <li>
        <Link to="/settings">Users</Link>
        { users }
      </li>
    )
  }
}

UserListMenu.propTypes = {
  getServiceData: PropTypes.func,
  userList: PropTypes.arrayOf(PropTypes.shape({
    fullname: PropTypes.string.isRequired,
    login: PropTypes.string.isRequired,
    services: PropTypes.arrayOf(PropTypes.shape({
      name: PropTypes.string,
      value: PropTypes.string,
      link: PropTypes.string,
      description: PropTypes.string,
      imgUrl: PropTypes.string
    }))
  })).isRequired
};

const mapStateToProps = (state) => {
  const { userList } = state.users;
  return {
    userList
  };
};

const mapDispatchToProps = {
  getServiceData: dashboardActions.getServiceData
};

export default connect(mapStateToProps, mapDispatchToProps)(UserListMenu);
