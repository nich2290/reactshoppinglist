import React, { Component } from "react";
import FlipMove from "react-flip-move";

class ShoppingItems extends Component {
  createTasks = item => {
    return (
      <li key={item.key} onClick={() => this.props.deleteItem(item.key)}>
        {item.text}
      </li>
    );
  };
  render() {
    const todoEntries = this.props.entries;
    const listItems = todoEntries.map(this.createTasks);
    //RENDER OF EACH ADDED ITEM:
    return (
      <ul className="shoppinglist">
        <FlipMove duration={250} easing="ease-out">
          {listItems}
        </FlipMove>
      </ul>
    );
  }
}

export default ShoppingItems;
