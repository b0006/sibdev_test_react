import React from 'react';
import { SwapiServiceConsumer } from '../../context/swapi';

const withSwapiService = () => (Wrapped) => {
  return (props) => {
    return (
      <SwapiServiceConsumer>
        {
          (swapistoreService) => {
            return (<Wrapped {...props} swapistoreService={swapistoreService} />)
          }
        }
      </SwapiServiceConsumer>
    );
  }
};

export default withSwapiService;
