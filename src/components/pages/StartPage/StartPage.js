import React, { Component } from 'react';

class StartPage extends Component {
  render() {
    const { user, users } = this.props;
    console.log(user);
    console.log('-------------');
    console.log(users);


    return (
      <h2>Start page</h2>
    )
  }
}

export default StartPage;

