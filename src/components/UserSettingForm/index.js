import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import UserAddForm from '../UserAddForm';
import UserUpdateForm from '../UserUpdateForm';

class UserSettingForm extends Component {
  render() {
    console.log(this.props)
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

UserSettingForm.propTypes = {
  activeUser: PropTypes.shape({
    fullname: PropTypes.string,
    login: PropTypes.string,
    services: PropTypes.arrayOf(PropTypes.shape({
      name: PropTypes.string,
      value: PropTypes.string,
      link: PropTypes.string,
      description: PropTypes.string,
      imgUrl: PropTypes.string
    }))
  })
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

export default connect(mapStateToProps)(UserSettingForm);
