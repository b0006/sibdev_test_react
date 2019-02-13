import React, { Component } from 'react';
import {Link} from "react-router-dom";

class MenuDropdown extends Component {
  render() {
    const { items, title, link } = this.props;

    return (
      <li>
        <Link to={link}>{title}</Link>
        <div className="uk-navbar-dropdown">
          <ul className="uk-nav uk-navbar-dropdown-nav">
            {
              items.map((item, index) => (
                <li key={index}><Link to={item.link}>{item.name}</Link></li>
              ))
            }
          </ul>
        </div>
      </li>
    )
  }
}

export default MenuDropdown;

