const swPeopleLoaded = (newPeoples) => {
  return {
    type: 'SW_PEOPLE_LOADED',
    payload: newPeoples
  }
};

export default swPeopleLoaded;
