import React from 'react'

function HooksUseState() {
  function increment() {}
  function decrement() {}
  
  return (
    <div className="App-header">
      <button onClick={decrement}>-</button>
      5
      <button onClick={increment}>+</button>
    </div>
  )
}

export default HooksUseState