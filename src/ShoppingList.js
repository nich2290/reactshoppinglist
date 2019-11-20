import React, { Component } from "react";

class ShoppingList extends Component {
  componentDidUpdate() {
    this.props.inputElement.current.focus();
  }
  render() {
    // RENDER OF THE FORM ELEMENTS
    return (
      <div className="shopListFirst">
        <div className="header">
          <form onSubmit={this.props.addItem}>
            <input placeholder="Hvad skal du huske?" ref={this.props.inputElement} value={this.props.currentItem.text} onChange={this.props.handleInput} />
            <button type="submit"> Tilføj </button>
          </form>
        </div>
      </div>
    );
  }
}

export default ShoppingList;
