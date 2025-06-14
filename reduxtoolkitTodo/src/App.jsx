import { useState } from 'react'
import './App.css'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import AddTodo from './components/AddTodo'
import Todos from './components/Todos'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Chai with redux toolkit</h1>
      <AddTodo />
      <Todos />
    </>
  )
}

export default App
