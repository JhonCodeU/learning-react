import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import './index.css';

// components
import User from './components/User';

let session = true;

const closeSession = () => {
  console.log('Closing session...');
  session = false;
  root.render(<App />);
}

const App = () => {
  return (
    <>
      {
        session ?
          <div>
            <User />
            <button onClick={closeSession}>Logout</button>
          </div>
          :
          <div>
            <h4>Session is not active</h4>
            <button>Login</button>
          </div>
      }
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
//root.render(verifySession(session));
root.render(<App />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();