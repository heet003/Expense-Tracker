import React, { useContext } from "react";
import { GlobalContext } from "../../context/GlobalState";
import "./Transaction.css";
function TranscationItem(props) {
  const { deleteTransaction } = useContext(GlobalContext);
  const sign = props.amount < 0 ? "-" : "+";
  return (
    <li className={sign === "+" ? "plus" : "minus"}>
      {props.text}
      <span>
        {sign}₹{Math.abs(props.amount)}
      </span>
      <button
        onClick={() => {
          deleteTransaction(props.id);
        }}
        className="delete-btn"
      >
        x
      </button>
    </li>
  );
}

export default TranscationItem;
