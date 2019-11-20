import React, { Component } from "react";
import ShoppingList from "./ShoppingList";
import ShoppingItems from "./ShoppingItems";

class App extends Component {
  inputElement = React.createRef();
  constructor() {
    super();
    this.state = {
      items: [],
      currentItem: {
        text: "",
        key: ""
      }
    };
  }
  deleteItem = key => {
    const filteredItems = this.state.items.filter(item => {
      return item.key !== key;
    });
    this.setState({
      items: filteredItems
    });
  };
  // EXPLAINS THE ITEM WHAT TEXT IT SHOULD CONTAIN FROM INPUT
  handleInput = e => {
    const itemText = e.target.value;
    const currentItem = { text: itemText, key: Date.now() };
    this.setState({
      currentItem
    });
  };
  // CREATES THE NEW ITEM WITH DATA FROM HANDLE INPUT / currentItem
  addItem = e => {
    e.preventDefault();
    const newItem = this.state.currentItem;
    if (newItem.text !== "") {
      const items = [...this.state.items, newItem];
      this.setState({
        items: items,
        currentItem: { text: "", key: "" }
      });
    }
  };
  render() {
    return (
      <div className="App">
        <div className="container">
          <h1 className="mainheading">Indkøbsliste</h1>
          <ShoppingList addItem={this.addItem} inputElement={this.inputElement} handleInput={this.handleInput} currentItem={this.state.currentItem} />
          <ShoppingItems entries={this.state.items} deleteItem={this.deleteItem} />
        </div>
      </div>
    );
  }
}

export default App;
