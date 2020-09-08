import React, { Component } from "react";
import Todo from "./Todo";

export default class List extends Component {
  getList = () => {
    const { inputChoice, todoList, itemHandlers } = this.props;
    let filteredTodo;

    if (inputChoice === "complete") {
      filteredTodo = todoList.filter((todo) => todo.isCompleted === true);
    } else if (inputChoice === "incomplete") {
      filteredTodo = todoList.filter((todo) => todo.isCompleted === false);
    } else {
      filteredTodo = todoList;
    }

    return filteredTodo.map((todo) => (
      <Todo
        key={todo.id}
        id={todo.id}
        innerText={todo.text}
        isCompleted={todo.isCompleted}
        itemHandlers={itemHandlers}
      />
    ));
  };
  render() {
    return (
      <div className="todo-container">
        <ul className="todo-list">{this.getList()}</ul>
      </div>
    );
  }
}
