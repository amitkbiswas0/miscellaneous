import React, { Component } from "react";

export default class Input extends Component {
  render() {
    const { inputText, inputChoice, setInput, submitHandler } = this.props;
    return (
      <form onSubmit={submitHandler}>
        <input
          type="text"
          name="inputText"
          className="todo-input"
          value={inputText}
          onChange={setInput}
        />
        <button className="todo-button" type="submit">
          <i className="fas fa-plus-square"></i>
        </button>
        <div className="select">
          <select
            name="inputChoice"
            className="filter-todo"
            value={inputChoice}
            onChange={setInput}
          >
            <option value="all">All</option>
            <option value="complete">Complete</option>
            <option value="incomplete">Incomplete</option>
          </select>
        </div>
      </form>
    );
  }
}
