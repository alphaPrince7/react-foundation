import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import Card from './components/card'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  let myObj = {
    username: "Prince",
    age: 24
  }

  let newArr = [1,2,3]

  return (
    <>
      <h1 className="bg-green-400 text-black p-4 rounded">Tailwind Test</h1>
      <Card username="chaiorCode" btnText="click me" someObj={newArr}/>
      <Card username="Prince" btnText="visit me"/>
    </>
  );
}

export default App
