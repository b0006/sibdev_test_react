import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class DashboardItem extends Component {
  render() {
    const { title, imgUrl, desc, link } = this.props;

    return (
      <div>
        <Link to={link}>
          <div className="uk-card uk-card-default">
            <div className="uk-card-media-top">
              <img src={imgUrl} alt="" />
            </div>
            <div className="uk-card-body"><h3 className="uk-card-title">{title}</h3>
              <p>{desc}</p>
            </div>
          </div>
        </Link>
      </div>
    )
  }
}

export default DashboardItem;
