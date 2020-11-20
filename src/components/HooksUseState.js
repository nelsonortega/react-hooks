import React, { useState } from 'react'

function HooksUseState() {
  const [count, setCount] = useState(0)
  // const [name, setName] = useState('')

  function increment() {
    setCount(count + 1)
  }

  function decrement() {
    setCount(count - 1)
  }
  
  return (
    <div className="App-header">
      <button onClick={decrement}>-</button>
      {count}
      <button onClick={increment}>+</button>
    </div>
  )
}

export default HooksUseState