import React, { useEffect, useState } from "react";
import { Button } from "antd";
import "./Die.css";
import Dice from "./Dice";
import { nanoid } from "nanoid";

const Die = () => {
  const initialDices = new Array(10).fill(0).map(() => {
    return {
      id: nanoid(),
      value: randomDieValue(),
      locked: false,
    };
  });
  const [dices, setDices] = useState(initialDices);
  const [isSuccess, setSuccess] = useState(false)

  const toggleLock = (id) => {
    setDices((dices) => {
      return dices.map(dice => {
        if (dice.id === id) {
          return {...dice, locked: !dice.locked}
        } else {
          return dice
        }
      })
     }

    );
  };
  const roll = () => {
    setDices(dices => {
      return dices.map(dice => {
        if (dice.locked) {
          return dice
        } else {
          return {...dice, value: randomDieValue()}
        }
      })
    })
  }
  const reset = () => {
    setDices(initialDices)
    setSuccess(false)
  }

  console.log("init", dices);

  function randomDieValue() {
    return Math.ceil(Math.random() * 6);
  }


  useEffect(() => {
    if (dices.every(dice => {
      return dice.locked && dice.value === dices[0].value
    })) {
      setSuccess(true)
    }
  }, [dices])

  return (
    <div className="die-container">
      <div className="die">
        <h1>Tenzies</h1>
        <p>
          Roll until all dice are the same. Click each die to freeze it at its
          current value between rolls.
        </p>
        <div className="dices">
          {dices.map((dice) => (
            <Dice key={dice.id} {...dice} toggleLock={toggleLock}></Dice>
          ))}
        </div>
        <Button className="roll-button" size="large" onClick={isSuccess? reset : roll}>{isSuccess? 'Reset Game': 'Roll' }</Button>
      </div>
    </div>
  );
};

export default Die;
