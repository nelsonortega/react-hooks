import React, { useState } from 'react'

function HooksUseEffect() {
  const [type, setType] = useState('Users')

  return (
    <div className="App-header-effect">
      <h6>{type}</h6>
      <div>
        <button onClick={() => setType('Users')}>Users</button>
        <button onClick={() => setType('Albums')}>Albums</button>
        <button onClick={() => setType('Photos')}>Photos</button>
      </div>
    </div>
  )
}

// function getData(type) {
//   console.log(`Getting ${type} from API`)
// }

export default HooksUseEffect