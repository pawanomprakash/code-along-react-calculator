import { useState } from 'react'
import './App.css'

function App() {
  const [operation,setOperation]=useState('')
  const operations=["+","-","*","/"]

  const handleClick=(e)=>{
    let value=e.target.innerText 
    if(operations.includes(operation.slice(-1)) && operations.includes(value)){
      setOperation(operation.slice(0,-1)+value)
    }else{
      setOperation(operation+value)
    }
  }
  const handleDel=()=>{
    setOperation(operation.slice(0,-1))
  }
  const handleEqualTo=()=>{
    try {
      const result=eval(operation);
      setOperation(result.toString());
    } catch(error){
      setOperation('Error');
    }
  };

  const handleAC=()=>{
    setOperation('')
  }

  return (

    <div id="container">
      <div id="display">
        <h1 id="screen" >
          {operation===''? 0:operation}
        </h1>
    </div>

      <div id="keypad">
        <div id="actionsContainer ">
          <button onClick={handleAC}>AC</button>
          <button onClick={handleDel}>Del</button>
          <button onClick={handleEqualTo}>=</button>
          <button onClick={handleClick}>+</button>
        </div>
        <div>
          <button onClick={handleClick}>7</button>
          <button onClick={handleClick}>8</button>
          <button onClick={handleClick}>9</button>
          <button onClick={handleClick}>-</button>
        </div>
         <div>
          <button onClick={handleClick}>4</button>
          <button onClick={handleClick}>5</button>
          <button onClick={handleClick}>6</button>
          <button onClick={handleClick}>*</button>
        </div>
        <div>
          <button onClick={handleClick}>3</button>
          <button onClick={handleClick}>2</button>
          <button onClick={handleClick}>1</button>
          <button onClick={handleClick}>/</button>
        </div>
        <div>
          <button></button>
          <button onClick={handleClick}>0</button>
          <button></button>
          <button onClick={handleClick}>%</button>
        </div>
      </div>
    </div>

  )
}

export default App
