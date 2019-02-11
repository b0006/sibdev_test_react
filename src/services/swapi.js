export default class SwapiService {

  _apiBase = 'https://swapi.co/api/';

  getResourse = async (url) => {
    const res = await fetch(this._apiBase + url);
    const body = await res.json();
    return body;
  };

  getPersons = async () => {
    const peopleList = await this.getResourse('people/');
    console.log(peopleList.results);
  }
}
