export default class UserService {
  static add = (fullname, login, services) => {
    if(window.localStorage.getItem('user_' + login)) {
      return {
        success: false,
        message: 'This login already exists'
      }
    }

    localStorage.setItem('user_' + login, JSON.stringify({
      fullname: fullname,
      login: login,
      services: services
    }));

    return {
      success: true,
      fullname: fullname,
      login: login,
      services: services
    }
  };

  static getUser = (login) => {
    const user = JSON.parse(window.localStorage.getItem('user_' + login));

    if(!user) {
      return {
        success: false,
        message: 'Login wasn\'t found'
      }
    }

    return {
      success: true,
      user: user
    }
  };

  static update = (fullname, login, services) => {

  };

  static remove = (login) => {
    try {
      localStorage.removeItem('user_' + login);
      return true;
    } catch (e) {
      return false;
    }
  };

  static removeAll = () => {
    try {
      localStorage.clear();
      return true;
    } catch (e) {
      return false;
    }
  };
}
