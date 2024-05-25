import { Fragment, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { Input, Button, Flex } from "antd";
import { useEffect } from "react";
import "./App.css";
import Card from "./components/Card.tsx";
import JokeList from "./components/JokeList";
import Questions from './components/Questions'
import Tours from './components/Tours'
import TodoList from './components/TodoList.tsx'
import CheckboxPage from "./components/CheckBoxPage";
import Die from './project1/Die.tsx'


function App() {

  return (
    <>
      {/* <TodoList></TodoList>
      <Tours></Tours> */}
      <Die></Die>

    </>
  );

}

export default App;
