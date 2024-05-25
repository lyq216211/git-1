import React from 'react'

const Joke = (props) => {
  const {item} = props
  return (
    <div>
      <h1>{item.setup}</h1>
      <h2>{item.punchline}</h2>
      <hr></hr>
    </div>
  );
}

export default Joke
