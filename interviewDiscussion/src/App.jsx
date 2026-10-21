import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

function App() {
  console.log("app rerendered", Math.random())
  const [value, setValue] = useState({
    value: 0
  })


  // const [mutiplied, setMultiplied] = useState(1)
  // const mutiplied = value * 5

  // const multiplybyFive = () => {
  //   // setMultiplied(value * 5)
  //   setValue(value +  1)
  // }

  const clickMe = () => {
    setValue({
      value: 0,
    });
  }

  return (
    <>
      <h1>Main value: {value.value}</h1>
      <button onClick={clickMe}>Click to multiply by 5</button>
      {/* <h2>Mutiplied value: {mutiplied}</h2> */}
    </>
  )
}

export default App
