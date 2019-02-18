import React, { Component } from 'react';
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

class MenuDropdown extends Component {
  render() {
    const { items, title, link } = this.props;
    const body = items.length > 0 ? (
      <div className="uk-navbar-dropdown">
        <ul className="uk-nav uk-navbar-dropdown-nav">
          {
            items.map(item => (
              <li key={`link_${item.name}`}><Link to={item.link}>{item.name}</Link></li>
            ))
          }
        </ul>
      </div>
): null;

    return (
      <li>
        <Link to={link}>{title}</Link>
        { body }
      </li>
    )
  }
}

MenuDropdown.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
    link: PropTypes.string,
    name: PropTypes.string
  })).isRequired,
  title: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired
};

export default MenuDropdown;

