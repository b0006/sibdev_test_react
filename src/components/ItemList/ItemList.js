import React, { Component } from 'react';
import { connect } from 'react-redux';
import { compose, bindActionCreators } from 'redux';
import { swapiActions, catsActions, punksActions } from "../../actions";

class ItemList extends Component {
  componentDidMount() {
    const { type, getPersons, getFacts, getBeers } = this.props;

    switch (type) {
      case 'sw':
        getPersons();
        break;
      case 'cats':
        getFacts();
        break;
      case 'punks':
        getBeers();
        break;
      default:
        break;
    }
  }

  render() {
    const { type, swPeople, catFacts, beers } = this.props;

    let items = [];
    let title = null;
    switch (type) {
      case 'sw':
        title = 'Star Wars people';
        items = swPeople;
        break;
      case 'cats':
        title = 'Random facts about cats';
        items = catFacts;
        break;
      case 'punks':
        title = 'Beers';
        items = beers;
        break;
    }

    return (
      <div>
        <h2>{title}</h2>
        <ul className="uk-list uk-list-striped">
          {
            items.map(item => (
              <li key={item.id}>{item.text}</li>
            ))
          }
        </ul>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  const { swPeople } = state.swapi;
  const { catFacts } = state.cats;
  const { beers } = state.punks;
  return {
    swPeople,
    catFacts,
    beers
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    getPersons: swapiActions.getPersons,
    getFacts: catsActions.getFacts,
    getBeers: punksActions.getBeers
  }, dispatch);
};

export default compose(
  connect(mapStateToProps, mapDispatchToProps)
)(ItemList);
