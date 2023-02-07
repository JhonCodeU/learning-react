import React, { useReducer } from 'react'
import Button from '../elements/Boton';

//Action
// {type: 'increment'}

// initial state
const initialCounter = { count: 0 };

// reducer
const reducer = (state, action) => {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
    case 'reset':
      return initialCounter;
    default:
      return state;
  }
}

const ExampleUseReducer = () => {

  const [state, dispatch] = useReducer(reducer, initialCounter);


  return (
    <div>
      <p>You clicked <b>{state.count}</b> times.</p>
      <Button onClick={() => dispatch({ type: 'increment' })}>+</Button>
      <Button onClick={() => dispatch({ type: 'decrement' })}>-</Button>
      <Button onClick={() => dispatch({ type: 'reset' })}>Reset</Button>
    </div>
  );
}

export default ExampleUseReducer;