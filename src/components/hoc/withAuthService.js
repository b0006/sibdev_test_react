import React from 'react';
import { AuthServiceConsumer } from '../context';

const withAuthService = () => (Wrapped) => {
  return (props) => {
    return (
      <AuthServiceConsumer>
        {
          (authStoreService) => {
            return (<Wrapped {...props} authStoreService={authStoreService} />)
          }
        }
      </AuthServiceConsumer>
    );
  }
};

export default withAuthService;
