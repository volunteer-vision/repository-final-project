// components/Login.js
import React, { useState } from 'react';
import styles from '../styles/login.module.css';

const Login = () => {
  const [action, setAction] = useState('Login');

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.text}>{action}</div>
        <div className={styles.underLine}></div>
      </div>
      <div className={styles.inputs}>
        <div className={styles.input}>
          <img src="/path/to/email_icon.png" alt='' />
          <input type='email' placeholder='Email' />
        </div>
        <div className={styles.input}>
          <img src="/path/to/password_icon.png" alt='' />
          <input type='password' placeholder='Password' />
        </div>
        {action === "Login" ? null : (
          <div className={styles.input}>
            <img src="/path/to/passwordConfirmation_icon.png" alt='' />
            <input type='password' placeholder='Password Confirmation' />
          </div>
        )}
      </div>
      <div className={styles.btnSubmit}>
        <div>Submit</div>
      </div>
      <div className={styles.submitContainer}>
        <div
          className={action === 'Login' ? styles.submitGray : styles.submit}
          onClick={() => {
            setAction('Sign Up');
          }}
        >
          Sign Up
        </div>
        <div
          className={action === 'Sign Up' ? styles.submitGray : styles.submit}
          onClick={() => {
            setAction('Login');
          }}
        >
          Login
        </div>
      </div>
    </div>
  );
};

export default Login;
