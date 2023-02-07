import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import FormLogin from './components/FormLogin';
//import CountClass from './components/CountClass';
//import FuncionalCounter from './components/FuncionalCounter';
import './css/index.css';
import Button from './elements/Boton';
import ExampleUseReducer from './components/ExampleUseReducer';
import Blog from './components/Blog';

// components
import User from './components/User';

const App = () => {

  const [session, changeStatusSession] = useState(true);

  return (
    <div className='container'>
      <>
        {
          session ?
            <div>
              <User />
              <Blog />
              {/* <CountClass amountIncrement={10} amountDecrement={5} /> */}
              <ExampleUseReducer />
              {/* <FuncionalCounter increment={10} decrement={5} /> */}
              <Button black large marginTop onClick={() => changeStatusSession(false)}>Logout</Button>
            </div>
            :
            <div>
              <h1>Session is not active</h1>
              <FormLogin changeStatusSession={changeStatusSession} />
              {/*  <button onClick={() => changeStatusSession(true)}>Login</button> */}
            </div>
        }
      </>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
//root.render(verifySession(session));
root.render(<App />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();