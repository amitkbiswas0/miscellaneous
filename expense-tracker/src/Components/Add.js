import React, { useContext, useState } from "react";
import { AccountContext } from "../App";

function Add() {
  const { setAccount } = useContext(AccountContext);

  const initialState = {
    id: "",
    note: "",
    amount: "",
    type: "add",
  };
  const [transaction, setTransaction] = useState(initialState);

  // controlled input
  const handleInput = (event) => {
    const { name, value } = event.target;
    setTransaction((prevState) => ({
      ...prevState,
      [name]: value,
      id: Date.now().toString(),
    }));
  };

  // add transaction to main account
  const handleSubmit = (event) => {
    event.preventDefault();
    const amount =
      transaction.type === "add"
        ? parseFloat(transaction.amount)
        : parseFloat(transaction.amount) * -1;
    setAccount((prevState) => [
      ...prevState,
      { ...transaction, amount: amount },
    ]);
    setTransaction(initialState);
  };

  return (
    <>
      <h3>Add Transaction</h3>
      <form onSubmit={handleSubmit}>
        <label htmlFor="amount">Add Amount</label>
        <input
          type="text"
          name="amount"
          id="amount"
          value={transaction.amount}
          onChange={handleInput}
        />
        <label htmlFor="note">Add a Note</label>
        <input
          type="text"
          name="note"
          id="note"
          value={transaction.note}
          onChange={handleInput}
        />
        <div className="radio">
          <input
            type="radio"
            name="type"
            value="add"
            checked={transaction.type === "add"}
            onChange={handleInput}
          />
          <span>Deposit</span>
          <input
            type="radio"
            name="type"
            value="sub"
            checked={transaction.type === "sub"}
            onChange={handleInput}
          />
          <span>Withdraw</span>
        </div>
        <button className="btn" type="submit">
          Add Transaction
        </button>
      </form>
    </>
  );
}

export default Add;
