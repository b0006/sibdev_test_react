const login = async (login, password) => {
  console.log('LOGIN');
  const hash = await hasCode(password);
  localStorage.setItem('user', JSON.stringify({
    login: login,
    password: hash
  }));
};

const logout = () => {
  console.log('LOGOUT');
  localStorage.removeItem('user');
};

export const authService = {
  login,
  logout
};

// export default class AuthService {
//   static login = async (login, password) => {
//     console.log('LOGIN');
//     const hash = await hasCode(password);
//     localStorage.setItem('user', JSON.stringify({
//       login: login,
//       password: hash
//     }));
//   };
//
//   static logout = () => {
//     console.log('LOGOUT');
//     localStorage.removeItem('user');
//   };
// }

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
