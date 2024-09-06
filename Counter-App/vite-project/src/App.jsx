import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  // java script write here
  const [count, setCount] = useState(0);

  const changeColor = (e) => {
    if (e.target.id == "red") {
      document.body.style.backgroundColor = "red";
    }
    if (e.target.id == "green") {
      document.body.style.backgroundColor = "green";
    }
    if (e.target.id == "blue") {
      document.body.style.backgroundColor = "blue";
    }
    if (e.target.id == "black") {
      document.body.style.backgroundColor = "black";
    }
    if (e.target.id == "white") {
      document.body.style.backgroundColor = "white";
    }
    
  }


  return (
    <>
      {/* html write here */}

      <button onClick={() => {
        if (count > 0) {
          setCount(count - 1);
        }
        }
      }>-</button>


      <span>{count}</span>


      <button onClick={() => {
        if (count < 20) {
          setCount(count + 1);
        }
      }
      }>+</button>

      <button id='red' onClick={(e) => {
        changeColor(e);
      }
      }>red</button>

      <button id='green' onClick={(e) => {
        changeColor(e);
      }
      }>green</button>

      <button id='blue'
      onClick={(e)=>{
        changeColor(e);
        }
      }>blue</button>

      <button id='black'
      onClick={(e)=>
        {
          changeColor(e);
        }
      }>black</button>

      <button id='white'onClick={(e)=>
        {
          changeColor(e);
        }
      }>white</button>
      
    </>
  )
}

export default App
