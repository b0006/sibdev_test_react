import React, { Component } from 'react';
import { connect } from 'react-redux';

import DashboardItem from '../DashboardItem';

class Dashboard extends Component {

  componentDidMount() {
    const { serviceList, activeUser } = this.props;
    console.log(serviceList)
    console.log(activeUser)
  }

  render() {
    return (
      <div id="search-results-grid" className="uk-child-width-1-3@m" data-uk-grid>
        <DashboardItem
          title="Star Wars"
          imgUrl="/img/sw.png"
          desc="Description"/>
        <DashboardItem
          title="Cats"
          imgUrl="/img/cats.jpg"
          desc="Description"/>
        <DashboardItem />
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

