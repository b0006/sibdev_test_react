import React, { Component } from 'react';
import { connect } from 'react-redux';
import { compose, bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import { swapiActions, catsActions, punksActions } from "../../actions";
import Spinner from '../Spinner';
import {Redirect} from "react-router-dom";

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
    const { loggedIn } = this.props;
    if(!loggedIn) {
      return <Redirect to="/login" />
    }

    const {
      type,
      swPeople,
      catFacts,
      beers,
      swLoading,
      catsLoading,
      punkLoading
    } = this.props;

    let items = [];
    let title = null;
    switch (type) {
      case 'sw':
        if(!swLoading) {
          return <Spinner />;
        }
        title = 'Star Wars people';
        items = swPeople;
        break;
      case 'cats':
        if(!catsLoading) {
          return <Spinner />;
        }
        title = 'Random facts about cats';
        items = catFacts;
        break;
      case 'punks':
        if(!punkLoading) {
          return <Spinner />;
        }
        title = 'Beers';
        items = beers;
        break;
      default:
        return <div>Oops</div>;
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

ItemList.propTypes = {
  type: PropTypes.string.isRequired,
  swPeople: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
    text: PropTypes.string
  })).isRequired,
  catFacts: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
    text: PropTypes.string
  })).isRequired,
  beers: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    text: PropTypes.string
  })).isRequired,
  swLoading: PropTypes.bool.isRequired,
  catsLoading: PropTypes.bool.isRequired,
  punkLoading: PropTypes.bool.isRequired,

  getPersons: PropTypes.func.isRequired,
  getFacts: PropTypes.func.isRequired,
  getBeers: PropTypes.func.isRequired
};

const mapStateToProps = (state) => {
  const { swPeople, swLoading } = state.swapi;
  const { catFacts, catsLoading } = state.cats;
  const { beers, punkLoading } = state.punks;
  const { loggedIn } = state.authentication;
  return {
    swPeople,
    catFacts,
    beers,
    swLoading,
    catsLoading,
    punkLoading,
    loggedIn
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
