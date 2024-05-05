// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

import Navbar from "./components/Navbar"
import Footer from "./components/Footer" 
import Card from "./components/Card"

function App() {
  
  return (
    <>
     <Navbar/>
     <div style={{display:"flex"}}>

     <Card title="Card 1" subtitle="1" desc="loremdhuduehduihe"/>
     <Card title="Card 2" subtitle="2" desc="loremdhuduehduihe"/>
     <Card title="Card 3" subtitle="3" desc="loremdhuduehduihe"/>
     </div>
     
     <Footer/>
    </>
  )
}

export default App
