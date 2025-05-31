import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const [counter, setCounter] = useState(5)

  const addValue = () => {
     setCounter(counter + 1)
  }

  const removeValue =() => {
    setCounter(counter-1)
  }

  return (
    <>
      <h1>chai aur React</h1>
      <h2>Counter value: {counter}</h2>
      <br />
    <button
    onClick={addValue}>add value {counter}</button>
    <br />
    <button
    onClick={removeValue}
    >remove value {counter}</button>
    <p>counter</p>
    </>
  )
}

export default App
