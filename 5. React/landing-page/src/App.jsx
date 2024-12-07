import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Navbar'
import Footer from './Footer'
import Card from './components/card'
import { flip } from '@popperjs/core'



function App() {
  const [count,setcount]=useState(0);

  return (
   <>
    <Navbar/>
   <div className="d-flex justify-content-center align-items-center flex-wrap">
   <Card desc={"This is 1st card"} />
   <Card desc={"This is 2nd card"}/>
   <Card desc={"This is 3rd card"}/>
   <Card desc={"This is 4th card"} />
   </div>
   <h4 className='text-center mt-4'>The count is {count}</h4>
   <div className='d-flex justify-center align-items-center'>
   <button  onClick={()=>setcount(count+1)}  className='btn my-4 text-white btn-info  '>Click me!!!</button>
   </div>
   <Footer/>
   </>
  )
}

export default App
