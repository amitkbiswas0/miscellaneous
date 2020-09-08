import React, { useState, createContext } from "react";
import "./App.css";
import Add from "./Components/Add";
import Status from "./Components/Status";
import IncomeExpense from "./Components/IncomeExpense";
import History from "./Components/History";

// Global Context
export const AccountContext = createContext(null);

function App() {
  const [account, setAccount] = useState([]);
  return (
    <AccountContext.Provider value={{ account, setAccount }}>
      <div className="container">
        <h1 className="title">Expense Tracker</h1>
        <Status />
        <IncomeExpense />
        <Add />
        <History />
      </div>
    </AccountContext.Provider>
  );
}

export default App;
