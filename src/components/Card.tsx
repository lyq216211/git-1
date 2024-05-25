import React from 'react'

const Card = (props) => {
  const { item, index, setArr } = props
  return (
    <div
      className={item.isBlack ? "app-children" : "app-children-white"}
      onClick={() =>
        setArr((arr) => {
          return arr.map((it, idx) =>
            idx === index ? { isBlack: !it.isBlack } : it
          );
        })
      }
    ></div>
  );
}

export default Card
