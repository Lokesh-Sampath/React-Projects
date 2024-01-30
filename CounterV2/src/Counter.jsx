import React from 'react'
import { useState } from 'react'

function Counter() {

  const [count,setCount] = useState(0);

  const increment  = () => setCount(count+1) 

  const decrement = () => setCount(count-1)

  return (

    <>

    <div className='count'>
        <h1>{count}</h1>
    </div>

    <section className="btns">
       <button onClick={increment}>+</button>
       <button onClick={decrement}>-</button>
    </section>
    
    </>

  )
}

export default Counter