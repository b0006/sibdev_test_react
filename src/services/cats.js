export default class CatsService {
  constructor() {
    this._apiBase = 'https://cors-anywhere.herokuapp.com/https://cat-fact.herokuapp.com/';
  }

  getResource = async (url) => {
    const res = await fetch(this._apiBase + url);
    return res.json();
  };

  getFacts = async () => {
    const res = await this.getResource('facts/random?animal=cat&amount=10');
    return setArray(res);
  };
}

function setArray(array) {
  let newArray = [];
  array.map(item => {
    newArray.push({
      id: item._id,
      text: item.text
    })
  });

  return newArray;
}
