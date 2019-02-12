import React, { Component } from 'react';
import { connect } from 'react-redux';
import { swapiActions } from "../../actions";

import DashboardItem from '../DashboardItem';

class Dashboard extends Component {

  componentDidMount() {
    const { getPersons } = this.props;
    getPersons();
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
  const { swPeople } = state.swapi;
  return {
    swPeople
  };
};

const mapDispatchToProps = {
  getPersons: swapiActions.getPersons
};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);

