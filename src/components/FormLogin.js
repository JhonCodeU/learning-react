import React, { useState } from 'react';
import '../css/form.css';

const FormLogin = (props) => {

  const [user, changeUser] = useState('');
  const [password, changePassword] = useState('');

  const onChange = (e) => {
    if (e.target.name === 'user') {
      changeUser(e.target.value);
    } else if (e.target.name === 'password') {
      changePassword(e.target.value);
    }
  }

  const onSubmit = (e) => {
    e.preventDefault();

    if (user === 'admin' && password === '1234') {
      props.changeStatusSession(true);
    } else {
      console.log('Login Fail');
      changeUser('');
      changePassword('');
    }
  }

  return (
    <form action='' className='form' onSubmit={onSubmit}>
      <div>
        <label className='label' htmlFor="user">User:</label>
        <input
          className='input'
          type="text"
          name="user"
          id="user"
          value={user}
          onChange={onChange}
        />
      </div>
      <div>
        <label className='label' htmlFor="password">Password:</label>
        <input
          className='input'
          type="password"
          name="password"
          id="password"
          value={password}
          onChange={onChange}
        />
      </div>
      <button className='boton' type="submit">Login</button>
    </form>
  );
}

export default FormLogin;