import React, { Component } from 'react';
import { connect } from 'react-redux';

import UserAddForm from '../UserAddForm';
import UserUpdateForm from '../UserUpdateForm';

class UserSettingForm extends Component {
  render() {
    const { activeUser } = this.props;
    const editUserForm = activeUser
      ? <UserUpdateForm key="updateForm" />
      : null;

    return (
      <div className="uk-child-width-1-2@m" data-uk-grid>
        <UserAddForm key="addForm" />
        {editUserForm}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  const { userList, hasError, errorMsg, activeUser } = state.users;
  return {
    userList,
    hasError,
    errorMsg,
    activeUser
  };
};

export default connect(mapStateToProps)(UserSettingForm);
