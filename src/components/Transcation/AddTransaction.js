import React, { useState, useContext } from "react";

import { GlobalContext } from "../../context/GlobalState";

function AddTransaction(props) {
  const [text, setText] = useState("");
  const [amount, setAmount] = useState("");
  const { transactions, addTransaction } = useContext(GlobalContext);

  function handleSubmit(event) {
    event.preventDefault();

    const newTransaction = {
      id: transactions.length + 1,
      text,
      amount: +amount,
    };
    setAmount("");
    setText("");
    addTransaction(newTransaction);
  }

  return (
    <div>
      <h3>Add new transaction</h3>
      <form onSubmit={handleSubmit}>
        <div className="form-control">
          <label htmlFor="text">Text</label>
          <input
            type="text"
            value={text}
            onChange={(e) => {
              setText(e.target.value);
            }}
            placeholder="Enter text..."
            required
          />
        </div>
        <div className="form-control">
          <label htmlFor="amount">
            Amount <br />
            (negative - expense, positive - income)
          </label>
          <input
            type="number"
            value={amount}
            onChange={(e) => {
              setAmount(e.target.value);
            }}
            placeholder="Enter amount..."
            required
          />
        </div>
        <button type="submit" className="btn">
          Add transaction
        </button>
      </form>
    </div>
  );
}

export default AddTransaction;
