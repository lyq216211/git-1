import React, { useState } from "react";
import { Button, Checkbox } from "antd";

const TodoListItem = ({ id, info, deleteItem }) => {
  const [checked, setChecked] = useState(false)

  return (
    <div className="item">
      <Checkbox
        value={checked}
        onChange={() => setChecked(!checked)}
      ></Checkbox>
      <span className={`item-info ${checked ? "finished" : ""}`}>{info}</span>
      <Button
        className="item-delete-btn"
        size="small"
        onClick={() => deleteItem(id)}
      >
        Delete
      </Button>
    </div>
  );
};

export default TodoListItem;
