export default class DashboardService {
  compareRandom = () => {
    return Math.random() - 0.5;
  };

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
        serviceList: user.services.sort(this.compareRandom),
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
