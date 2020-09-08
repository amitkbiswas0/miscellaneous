import React, { useContext } from "react";
import { AccountContext } from "../App";

function History() {
  const { account, setAccount } = useContext(AccountContext);

  const list = account.map((transaction) => {
    const itemClass = transaction.amount > 0 ? "plus" : "minus";

    return (
      <li key={transaction.id} className={itemClass}>
        {transaction.note}
        <span>{transaction.amount}$</span>
        <button
          className="delete-btn"
          onClick={(e) => {
            const updatedAccount = account.filter(
              (elem) => elem.id !== transaction.id
            );
            setAccount([...updatedAccount]);
          }}
        >
          x
        </button>
      </li>
    );
  });

  return (
    <>
      <h3>Transaction History</h3>
      <ul className="list">{list}</ul>
    </>
  );
}

export default History;
