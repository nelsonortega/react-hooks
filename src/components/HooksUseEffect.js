import React, { useEffect, useState } from 'react'

function HooksUseEffect() {
  const [type, setType] = useState('Users')
  const [count, setCount] = useState(0)

  useEffect(() => {
    getData(type)

    return () => {
      console.log('asd')
    }
  }, [type])

  return (
    <div className="App-header-effect">
      <h6>{type}</h6>
      <div>
        <button onClick={() => setType('Users')}>Users</button>
        <button onClick={() => setType('Albums')}>Albums</button>
        <button onClick={() => setType('Photos')}>Photos</button>
      </div>
      {count}
      <button onClick={() => setCount(count + 1)}>setCount</button>
    </div>
  )
}

function getData(type) {
  console.log(`Getting ${type} from API`)
}

export default HooksUseEffect