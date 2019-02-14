export default class DashboardService {
  getServiceList = (login) => {
    const user = JSON.parse(window.localStorage.getItem('user_' + login));
    if(user) {
      return {
        success: true,
        serviceList: user.services,
        user: user
      }
    } else {
      return {
        success: false,
        message: 'Login wasn\'t found'
      }
    }
  }
}
