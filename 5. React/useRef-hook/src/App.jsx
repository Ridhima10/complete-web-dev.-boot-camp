import { useState,useEffect,useRef } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  // second use case of useRef- change or update the style of any element 

    const btnRef = useRef()
    useEffect(() => {
      console.log("First rendering");
    btnRef.current.style.backgroundColor = 'red'
    btnRef.current.style.borderColor='red'
  },[])
  
  function removeBtn() {
    btnRef.current.style.display="none";
  }

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button ref={btnRef} onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
       {/* just for practice , do not use "current" for rendering . You can do this either in useRef effect or in event handlers. */}
       {/*If you have to read or write something during rendering, use state instead.  */}
      {/* <button onClick={()=>btnRef.current.style.display="none"}> Change above btn</button> */}
      {/* Do this instead */}
        <button onClick={removeBtn}> Change above btn</button>
    </>
  )
}

export default App
