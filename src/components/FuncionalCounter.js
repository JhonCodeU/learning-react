import React, { useState } from 'react';
import '../css/counter.css';

const FuncionalCounter = ({ increment, decrement }) => {

  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(count + increment);
  }

  const handleDecrement = () => {
    setCount(count - decrement);
  }

  return (
    <div>
      <h1>{count}</h1>
      <button className='boton-counter' onClick={handleDecrement}>Subtract</button>
      <button className='boton-counter' onClick={handleIncrement}>Add</button>
    </div>
  );
};

export default FuncionalCounter;