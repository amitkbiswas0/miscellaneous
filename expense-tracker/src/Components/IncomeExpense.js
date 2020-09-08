import React, { useContext } from "react";
import { AccountContext } from "../App";

function IncomeExpense() {
  const { account } = useContext(AccountContext);

  const income = account
    .filter((elem) => elem.type === "add")
    .reduce((acc, elem) => acc + elem.amount, 0);
  const expense = account
    .filter((elem) => elem.type === "sub")
    .reduce((acc, elem) => acc + elem.amount, 0);

  return (
    <div className="inc-exp-container">
      <div>
        <h4>Earned</h4>
        <p className="money plus">${income.toFixed(2)}</p>
      </div>
      <div>
        <h4>Spent</h4>
        <p className="money minus">${(expense * -1).toFixed(2)}</p>
      </div>
    </div>
  );
}

export default IncomeExpense;
