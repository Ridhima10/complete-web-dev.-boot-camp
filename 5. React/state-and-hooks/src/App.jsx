import { useState } from 'react'
import './App.css'

function App() {
  //state name - count with initial value 0, setCount= function
  const [count, setCount] = useState(0)

  return (
    <>
      <div>The count is {count}</div>
      <button onClick={() => { setCount(count + 1) }} style={{ border: "2px solid black" }}>click me</button>
    </>
  )
}

export default App
