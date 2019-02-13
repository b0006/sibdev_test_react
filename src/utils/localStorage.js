function findLocalItems (query) {
  let i, results = [];
  for (i in localStorage) {
    if (localStorage.hasOwnProperty(i)) {
      if (i.match(query) || (!query && typeof i === 'string')) {
        let value = JSON.parse(localStorage.getItem(i));
        results.push(value);
      }
    }
  }
  return results;
}

export {
  findLocalItems
}
