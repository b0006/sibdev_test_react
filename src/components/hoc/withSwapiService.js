import React from 'react';
import { SwapiServiceConsumer } from '../context';

const withSwapiService = () => (Wrapped) => {
  return (props) => {
    return (
      <SwapiServiceConsumer>
        {
          (swapiStoreService) => {
            return (<Wrapped {...props} swapiStoreService={swapiStoreService} />)
          }
        }
      </SwapiServiceConsumer>
    );
  }
};

export default withSwapiService;
