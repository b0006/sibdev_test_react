const _apiBase = 'https://swapi.co/api/';

const getResourse = async (url) => {
  const res = await fetch(_apiBase + url);
  return res.json();
};

const getPersons = async () => {
  const res = await getResourse('people');
  return res.results;
};

export {
  getPersons
}
