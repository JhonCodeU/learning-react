import React, { useState, useEffect } from 'react';
//import style from '../css/counter.css';
import Button from '../elements/Boton';

const FuncionalCounter = ({ increment, decrement }) => {

  const [count, setCount] = useState(0);

  // Similar a componentDidMount y componentDidUpdate:
  // El hook useEffect se ejecuta después de cada renderizado
  useEffect(() => {
    console.log('useEffect');
  });

  // Similar a componentDidMount:
  // Carga por primera vez
  useEffect(() => {
    console.log('useEffect - carga por primera vez');
  }, []);

  // Similar a componentDidUpdate:
  // Se ejecuta cuando el valor de count cambia
  useEffect(() => {
    console.log('useEffect - se ejecuta cuando el valor de count cambia');
  }, [count]);

  // hook personalizado con return
  useEffect(() => {
    return () => {
      console.log('useEffect - hook personalizado con return - return');
    }
  }, []);

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