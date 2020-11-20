import './css/App.css'
import React from 'react'
import HooksUseMemo from './components/HooksUseMemo'
import HooksUseState from './components/HooksUseState'
import HooksUseEffect from './components/HooksUseEffect'
import ClassStateExample from './components/ClassComparation'

function App() {
  return (
    <React.Fragment>
      <HooksUseState />
      <ClassStateExample />
      <HooksUseEffect />
      <HooksUseMemo />
    </React.Fragment>
  )
}

export default App