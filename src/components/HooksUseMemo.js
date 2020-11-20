import React, { useState } from 'react'

function HooksUseMemo() {
  const [number, setNumber] = useState(0)
  const [darkTheme, setDarkTheme] = useState(true)

  const newNumber = getNewNumber(number)

  const theme = {
    backgroundColor: darkTheme ? '#282c34' : 'white',
    color: darkTheme ? 'white' : '#282c34' 
  }

  return (
    <div className="App-header-Memo" style={theme}>
      <input type="number" value={number} onChange={e => setNumber(e.target.value)} />
      <button onClick={() => setDarkTheme(!darkTheme)}>Change Theme!</button>
      <div>{newNumber}</div>
    </div>
  )
}

function getNewNumber (number) {
  console.log('Getting number')
  for (let i = 0; i <= 1000000000; i++) {}

  return number * 5
}

export default HooksUseMemo