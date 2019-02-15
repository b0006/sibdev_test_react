import serviceStatic from '../serviceStatic';

export default class AuthService {
  static signIn = async (login, password) => {
    const hash = await hasCode(password);

    const user = {
      login: login,
      password: hash,
      services: serviceStatic
    };

    localStorage.setItem('user', JSON.stringify(user));

    return user;
  };

  static logout = () => {
    localStorage.removeItem('user');
  };
}

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
