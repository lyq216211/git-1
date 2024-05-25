import React from "react";

const Dice = ({ id, locked, value, toggleLock }) => {
  return (
    <div
      className={`dice ${locked ? "locked" : ""}`}
      onClick={() => toggleLock(id)}
    >
      {value}
    </div>
  );
};

export default Dice;
