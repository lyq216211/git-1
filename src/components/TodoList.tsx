import React, { useEffect, useState, useRef } from "react";
import { Input, Button, message, InputRef } from "antd";
import TodoListItem from "./TodoListItem";
import { nanoid } from "nanoid";
import useLocalStorage from "../hooks/useLocalStorage";

const TodoList = () => {
  const [localStroageMessage, setLocalStroageMessage, removeItem] =
    useLocalStorage("TodoList", JSON.stringify(""));
  const [items, setItems] = useState(JSON.parse(localStroageMessage) || []);
  const [value, setValue] = useState("");
  const [messageApi, contextHolder] = message.useMessage();
  const inputRef = useRef<InputRef>(null);
  function addItem() {
    if (value.length) {
      setItems((items) => {
        const newItems = [...items, { id: nanoid(), info: value }];
        return newItems;
      });
      messageApi.open({
        type: "success",
        content: "Item Added To The List",
        duration: 3,
      });
      setValue("");
    } else {
      messageApi.open({
        type: "error",
        content: "Please Provider Value",
        duration: 3,
      });
    }
  }
  function deleteItem(id) {
    setItems((items) => {
      const newItems = items.filter((item) => item.id !== id);
      return newItems;
    });
    messageApi.open({
      type: "success",
      content: "Item Deleted",
      duration: 3,
    });
  }
  useEffect(() => {
    setLocalStroageMessage(JSON.stringify(items));
  }, [items]);
  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);
  console.log("local   ", localStroageMessage);

  return (
    <div className="todo-list">
      {contextHolder}
      <h2 className="title">Grocery Bud</h2>
      <div className="control">
        <Input
          ref={inputRef}
          className="input"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        ></Input>
        <Button type="primary" className="btn" onClick={addItem}>
          Add Item
        </Button>
      </div>

      <div className="todo-items">
        {items.map((item) => {
          return (
            <TodoListItem
              key={item.id}
              {...item}
              deleteItem={deleteItem}
            ></TodoListItem>
          );
        })}
      </div>
    </div>
  );
};

export default TodoList;
