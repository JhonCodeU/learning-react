import React, { useState } from 'react';
//import style from '../css/counter.css';
import Button from '../elements/Boton';

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
      <Button className='boton-counter' onClick={handleDecrement}>Subtract</Button>
      <Button className='boton-counter' onClick={handleIncrement}>Add</Button>
    </div>
  );
};

export default FuncionalCounter;