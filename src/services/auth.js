const signIn = async (login, password) => {
  const hash = await hasCode(password);
  localStorage.setItem('user', JSON.stringify({
    login: login,
    password: hash
  }));

  return {
    login: login,
    password: hash
  }
};

const logout = () => {
  localStorage.removeItem('user');
};

const test = () => {
  console.log('TEST');
};

function hasCode(str) {
  let strBuf = new TextEncoder('utf-8').encode(str);
  return crypto.subtle.digest('SHA-256', strBuf)
    .then(hash => {
      window.hash = hash;
      // here hash is an arrayBuffer,
      // so we'll connvert it to its hex version
      let result = '';
      const view = new DataView(hash);
      for (let i = 0; i < hash.byteLength; i += 4) {
        result += ('00000000' + view.getUint32(i).toString(16)).slice(-8);
      }
      return result;
    });
}

export {
  signIn,
  logout,
  test
}
