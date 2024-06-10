import React from "react";
function TranscationItem(props) {
  const sign = props.amount < 0 ? "-" : "+";
  return (
    <li className={sign === "+" ? "plus" : "minus"}>
      {props.text}
      <span>
        {sign}₹{Math.abs(props.amount)}
      </span>
      <button className="delete-btn">x</button>
    </li>
  );
}

export default TranscationItem;
