import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/card'

function App() {
  const [count, setCount] = useState(0)
  let myObj = {
    name : 'aayushma',
    age : '20'
  }

  return (
    <>
      <h1 className='bg-green-400 text-black rounded-xl'>tailwind test</h1>
      <Card username="chaiaurcode" someObj={myObj}/>
    </>
  )
}

export default App
