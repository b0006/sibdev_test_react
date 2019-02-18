import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

import DashboardItem from './DashboardItem';
import { dashboardActions } from "../../actions";

class Dashboard extends Component {

  componentDidMount() {
    const { getServiceData, match } = this.props;

    const currentLogin = match.params.login;
    getServiceData(currentLogin);
  }

  render() {
    const { serviceList, activeUser } = this.props;

    return (
      <div className="uk-margin">
        <h2>{activeUser.fullname}</h2>
        <div id="search-results-grid" className="uk-child-width-1-3@m" data-uk-grid>
          {

            serviceList.map(item => (
              <DashboardItem
                key={`dash_${  item.value}`}
                title={item.name}
                imgUrl={item.imgUrl}
                desc={item.description}
                link={item.link}
              />
            ))
          }
        </div>
      </div>
    )
  }
}

Dashboard.propTypes = {
  getServiceData: PropTypes.func.isRequired,
  match: PropTypes.any.isRequired,
  serviceList: PropTypes.arrayOf(PropTypes.shape({
    description: PropTypes.string,
    imgUrl: PropTypes.string,
    link: PropTypes.string,
    name: PropTypes.string,
    value: PropTypes.string
  })).isRequired,
  activeUser: PropTypes.shape({
    fullname: PropTypes.string,
    login: PropTypes.string
  }).isRequired
};

const mapStateToProps = (state) => {
  const { serviceList, activeUser } = state.dashboard;
  return {
    serviceList,
    activeUser
  };
};

const mapDispatchToProps = {
  getServiceData: dashboardActions.getServiceData
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Dashboard));

