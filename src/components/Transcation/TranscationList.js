import React, { useContext } from "react";
import { GlobalContext } from "../../context/GlobalState";
import TranscationItem from "./TransactionItem";
function TransactionList(props) {
  const { transactions } = useContext(GlobalContext);
  return (
    <div>
      <h3>History</h3>
      <ul className="list">
        {transactions.map((element) => (
          <TranscationItem
            key={element.id}
            id={element.id}
            text={element.text}
            amount={element.amount}
          />
        ))}
      </ul>
    </div>
  );
}

export default TransactionList;
