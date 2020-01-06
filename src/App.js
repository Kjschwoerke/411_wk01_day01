import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)

    this.state={
      toDo:"",
      list: []
    }
  }

updateInput(key, value) {
  //update react state
  this.setState({
    [key]: value
  })
}

addItem(){
  //function to create item with unique id
  const toDo = {
    id: 1 + Math.random(),
    value: this.state.toDo.slice()
  }
  //create a copy of current list items
  const list = [...this.state.list]

  //add new item to the list
  list.push(toDo)

  //update the input field back to initial state
  this.setState({
    list,
    toDo: ""
  })
}

deleteItem(id){
  //create a function to delete the individual list items on button click
  //copy current list of items
  const list = [...this.state.list]
  //use filter() to remove the item being deleted
  const updatedList = list.filter(item => item.id !== id)
  this.setState({list: updatedList})
}

  render() {
    return (
      <div className="App">
        <div>
          Add an Item...
          <br/>
          <input
          type = "text"
          placeholder = "Type New List Item Here..."
          value = {this.state.toDo}
          onChange = {e => this.updateInput("toDo", e.target.value)}
          />
          <button onClick={() => this.addItem()}>Add Item</button>
          <br/>
          <ul>
            {this.state.list.map(item=> {
              return(
                //create a list item for each item in the array
                <li key={item.id}>
                  {item.value}
                  {/* create a button that deletes an item */}
                  <button onClick={() => this.deleteItem(item.id)}>Delete Item</button>
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    )
  }
}

export default App;
