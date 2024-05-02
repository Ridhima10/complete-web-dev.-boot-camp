import logo from './logo.svg';
import './App.css';
import {useState } from 'react';
//component name should be capitalize
import Navbar from './components/Nav'; 
import Footer from './components/Footer';

function App() {
  const [value, setValue] = useState(0);
  return (
    <div className="App">
      <Navbar logoText="RidhiBlog"/>
     <div className='value'>{value}</div>
     <button onClick={()=>setValue(value+1)}>Click me</button>
     <Footer/>
    </div>
  );
}

export default App;
