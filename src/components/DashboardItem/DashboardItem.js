import React, { Component } from 'react';

class DashboardItem extends Component {
  render() {
    const { title, imgUrl, desc } = this.props;

    return (
      <div>

          <div className="uk-card uk-card-default">
            <div className="uk-card-media-top">
              <img src={imgUrl} alt="" />
            </div>
            <div className="uk-card-body">
              <h3 className="uk-card-title">{title}</h3>
              <p>{desc}</p>
            </div>
          </div>
      </div>
    )
  }
}

export default DashboardItem;
