import React, { useState } from 'react';
import styles from '../css/form.module.css';
import Button from '../elements/Boton';

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
    <form action='' className={styles.form} onSubmit={onSubmit}>
      <div>
        <label className={styles.label} htmlFor="user">User:</label>
        <input
          className={styles.input}
          type="text"
          name="user"
          id="user"
          value={user}
          onChange={onChange}
        />
      </div>
      <div>
        <label className={styles.label} htmlFor="password">Password:</label>
        <input
          className={styles.input}
          type="password"
          name="password"
          id="password"
          value={password}
          onChange={onChange}
        />
      </div>
      <div>
        <Button large className={styles.boton} type="submit">Login</Button>
      </div>
    </form>
  );
}

export default FormLogin;