import React, { Component } from 'react';

class ItemList extends Component {

  onDelete = (id) => {
    console.log(id);
  };

  render() {
    const { items } = this.props;

    return (
      <div>
        <h2>User list</h2>
        <ul className="uk-list uk-list-striped">
          {
            items.map(item => (
              <li
                key={item.id}
              >
                {item.name}
                <input type="button" onClick={this.onDelete(item.id)} value="Delete" />
              </li>
            ))
          }

        </ul>
      </div>
    )
  }
}

export default ItemList;

