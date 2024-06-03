// components/Login.js
import React, { useRef, useState } from 'react';
import styles from '../styles/login.module.css';
import { useRouter } from 'next/router';
import toast, { Toaster } from 'react-hot-toast';
const Login = () => {
  const router = useRouter()
  const [action, setAction] = useState('Login');
  const emailValue = useRef()
  const passwordValue = useRef()
  const confirmPasswordValue = useRef()

 

  async function fetchLogin() {
    if(action === 'Login') {
      const options = {
      method:"POST", 
      headers:{"Content-Type":"Application/json"},
      body:JSON.stringify({
        email:emailValue.current.value,
        password: passwordValue.current.value,
      })
    }
    const res = await fetch ('api/auth/login', options)
    const data = await res.json()
   
    
    if(res.status === 200) {
      localStorage.setItem('token', data.id)
      router.push("/")
      toast.success("Logged in",{
        style: {
          border: '1px solid #2962ff' ,
          padding: '16px',
          color: '#2962ff',
        },
        iconTheme: {
          primary: '#2962ff',
          secondary: '#ffffff',
        },

      })
    } else {
      toast.error("Invalid email or password")
    }

  }
    if(action === 'Sign Up') {
      
      if(passwordValue.current.value === confirmPasswordValue.current.value) {
      const options = {
      method:"POST", 
      headers:{"Content-Type":"Application/json"},
      body:JSON.stringify({
        email:emailValue.current.value,
        password: passwordValue.current.value,
        passwordConfirmation: confirmPasswordValue.current.value
      })
    }
    
    const res = await fetch ('api/auth/signUp',options)
    
  }}
  

    
    console.log(action)
  }

  return (
    <div className={styles.container}>
     
      <div className={styles.header}>
        <div className={styles.text}>{action}</div>
        <div className={styles.underLine}></div>
      </div>
      <div className={styles.inputs}>
        <div className={styles.input}>
          <img src="/path/to/email_icon.png" alt='' />
          <input type='email' placeholder='Email' ref={emailValue}/>
        </div>
        <div className={styles.input}>
          <img src="/path/to/password_icon.png" alt='' />
          <input type='password' placeholder='Password' ref={passwordValue}/>
        </div>
        {action === "Login" ? null : (
          <div className={styles.input}>
            <img src="/path/to/passwordConfirmation_icon.png" alt='' />
            <input type='password' placeholder='Password Confirmation' ref={confirmPasswordValue}/>
          </div>
        )}
      </div>
      <button className={styles.btnSubmit} onClick={() => fetchLogin()}>
       Submit
      </button>
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
