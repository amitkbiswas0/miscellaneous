import React, { Component } from "react";
import "./App.css";
import Input from "./components/Input";
import List from "./components/List";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputText: "",
      inputChoice: "all",
      todoList: [],
    };
  }

  // for Input fields
  setInput = (event) => {
    // have to store event.target first rather than using it directly
    // https://stackoverflow.com/questions/42089795/reactjs-cant-set-state-from-an-event-with-event-persist
    const { name, value } = event.target;
    this.setState(() => ({
      [name]: value,
    }));
  };
  submitHandler = (event) => {
    event.preventDefault();
    const todo = {
      id: Date.now().toString(),
      text: this.state.inputText,
      isCompleted: false,
    };
    this.setState((prevState) => ({
      inputText: "",
      inputChoice: "all",
      todoList: [...prevState.todoList, todo],
    }));
  };

  // for List items
  handleCompletion = (id) => {
    this.setState((prevState) => {
      const newTodoList = prevState.todoList.map((todo) => {
        if (id === todo.id) return { ...todo, isCompleted: !todo.isCompleted };
        else return todo;
      });
      return {
        todoList: newTodoList,
      };
    });
  };
  handleDeletion = (id) => {
    this.setState((prevState) => {
      const newTodoList = prevState.todoList.filter((todo) => id !== todo.id);
      return {
        todoList: newTodoList,
      };
    });
  };

  // main render call
  render() {
    return (
      <div className="App">
        <header>Hello World of React Apps!</header>
        <Input
          inputText={this.state.inputText}
          inputChoice={this.state.inputChoice}
          setInput={this.setInput}
          submitHandler={this.submitHandler}
        />
        <List
          inputChoice={this.state.inputChoice}
          todoList={this.state.todoList}
          itemHandlers={[this.handleCompletion, this.handleDeletion]}
        />
      </div>
    );
  }
}

export default App;
