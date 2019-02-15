export default class PunkService {
  constructor() {
    this._apiBase = 'https://api.punkapi.com/v2/';
  }

  getResource = async (url) => {
    const res = await fetch(this._apiBase + url);
    return res.json();
  };

  getBeers = async () => {
    const res = await this.getResource('beers?per_page=10');
    return setArray(res);
  };
}

function setArray(array) {
  let newArray = [];
  array.map(item =>
    newArray.push({
      id: item.id,
      text: item.name + '. ' + item.tagline
    })
  );

  return newArray;
}
