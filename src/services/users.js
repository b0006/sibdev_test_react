export default class UserService {
  static add = (fullname, login, services) => {
    localStorage.setItem('user_' + login, JSON.stringify({
      fullname: fullname,
      login: login,
      services: services
    }));

    return {
      fullname: fullname,
      login: login,
      services: services
    }
  };

  remove = (login) => {
    localStorage.removeItem('user_' + login);
  }
}
