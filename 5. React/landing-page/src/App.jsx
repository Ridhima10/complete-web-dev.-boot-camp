import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Navbar'
import Footer from './Footer'
import Card from './components/card'
import { flip } from '@popperjs/core'


function App() {

  return (
   <>
   <Navbar/>
   <div className="d-flex justify-content-center align-items-center flex-wrap">
   <Card desc={"This is 1st card"} />
   <Card desc={"This is 2nd card"}/>
   <Card desc={"This is 3rd card"}/>
   <Card desc={"This is 4th card"} />
   
   </div>
   <Footer/>
   </>
  )
}

export default App
