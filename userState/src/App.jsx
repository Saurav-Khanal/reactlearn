import React from 'react'
import {useState} from 'react'
const App = () => {
  const [count, setcount] = useState(0);
  function handleClick(){
    setcount(count+5);
  }
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={handleClick}>Click</button>
    </div>
  )
}

export default App
