export default class DashboardService {
  getServiceData = (login = 'user') => {
    let user = null;
    let fullname = null;
    if(login === 'user') {
      user = JSON.parse(window.localStorage.getItem('user'));
      fullname = 'Администратор';
    } else {
      user = JSON.parse(window.localStorage.getItem('user_' + login));
      fullname = user.fullname;
    }

    if(user) {
      return {
        success: true,
        serviceList: user.services,
        user: {
          fullname: fullname,
          login: user.login
        }
      }
    } else {
      return {
        success: false,
        message: 'Login wasn\'t found'
      }
    }
  };
}
