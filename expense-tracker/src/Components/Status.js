import React, { useContext } from "react";
import { AccountContext } from "../App";

function Status() {
  const { account } = useContext(AccountContext);
  const total = account.reduce((acc, elem) => acc + elem.amount, 0);
  return (
    <>
      <h4>Current Balance :</h4>
      <h1>${total.toFixed(2)}</h1>
    </>
  );
}

export default Status;
