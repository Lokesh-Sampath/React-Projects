import { useState } from 'react'
import './App.css'

function App() {

let [counter, setCounter]  = useState(15)  

const addvalue = () =>{
  if(counter<30){
    setCounter(counter+1)
    }
  }

const removeValue =() => {
  if(counter>0) {
    setCounter(counter-1)
    }
}

  return (
    <>
      <h1>Hello Developers</h1>
      <h2>Counter values: {counter}</h2>
      <button onClick={addvalue}>Add value {counter}</button>
      <br />
      <button onClick={removeValue}>Remove value {counter}</button>
    </>
  )
}

export default App
