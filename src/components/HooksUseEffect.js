import React, { useState } from 'react'

function HooksUseEffect() {
  const [type, setType] = useState('users')

  return (
    <div className="App-header-effect">
      <h6>{type}</h6>
      <div>
        <button onClick={() => setType('users')}>Users</button>
        <button onClick={() => setType('albums')}>Albums</button>
        <button onClick={() => setType('photos')}>Photos</button>
      </div>
    </div>
  )
}

// function getData(type) {
//   console.log('Getting from API ' + type)
// }

export default HooksUseEffect