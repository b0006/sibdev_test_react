import React, { Component } from 'react';
import { connect } from 'react-redux';

import DashboardItem from '../DashboardItem';

class Dashboard extends Component {
  render() {
    const { serviceList, activeUser } = this.props;

    return (
      <div className="uk-margin">
        <h2>{activeUser.fullname}</h2>
        <div id="search-results-grid" className="uk-child-width-1-3@m" data-uk-grid>
          {
            serviceList.map(item => (
              <DashboardItem
                key={'dash_' + item.value}
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

const mapStateToProps = (state) => {
  const { serviceList, activeUser } = state.dashboard;
  return {
    serviceList,
    activeUser
  };
};

export default connect(mapStateToProps)(Dashboard);

