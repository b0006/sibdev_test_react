export default class SwapiService {
  constructor() {
    this._apiBase = 'https://swapi.co/api/';
  }

  getResource = async (url) => {
    const res = await fetch(this._apiBase + url);
    return res.json();
  };

  getPersons = async () => {
    const res = await this.getResource('people');
    return res.results;
  };
}
