import React, { Component } from "react";

export default class Todo extends Component {
  render() {
    const { id, innerText, isCompleted, itemHandlers } = this.props;
    const [completion, deletion] = itemHandlers;
    const todoClass = isCompleted ? "todo completed" : "todo";

    return (
      <div className={todoClass}>
        <li className="todo-item">{innerText}</li>
        <button className="complete-btn" onClick={() => completion(id)}>
          <i className="fas fa-check"></i>
        </button>
        <button className="trash-btn" onTransitionEnd={() => deletion(id)}>
          <i className="fas fa-trash"></i>
        </button>
      </div>
    );
  }
}
