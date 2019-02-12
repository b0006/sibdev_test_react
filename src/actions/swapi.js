import { swapiConstants } from '../constants';

const swPeopleLoaded = (newPeoples) => {
  return {
    type: swapiConstants.SW_PEOPLE_LOADED,
    payload: newPeoples
  }
};

export {
  swPeopleLoaded
};
