import React, {useEffect, useRef} from 'react';
import {Alert, Button} from '@mui/material';
import {Link, Navigate} from 'react-router-dom';
import {useSelector, useDispatch} from 'react-redux';
import {loginUser}  from '../redux';

function Login() {
  const emailRef = useRef();
  const passwordRef = useRef();

// useSelector hook 

const loginData=useSelector((state)=>{
  return {
    user:state.user.user,
    showAlert:state.user.showLoginAlert,
    alertText:state.user.loginAlert
  }
})

const {user,showAlert,alertText}=loginData;

// useDispatch Hook

const dispatch=useDispatch();

const handleLogin= e=>{
  e.preventDefault();
   dispatch(loginUser({email:emailRef.current.value,password:passwordRef.current.value}))
  


}

  return (
    <>
    {user && <Navigate to="/"/>}
      <div className='loginFormContainer'>
        <form onSubmit={handleLogin} className='login-form'>
          {showAlert && <Alert severity='error'>{alertText}</Alert>}
          <h2>Login Form</h2>

          <div className='form-item'>
            <input
              color='secondary'
              type='email'
              placeholder='type your email...'
              ref={emailRef}
            />
          </div>
          <div className='form-item'>
            <input
              color='secondary'
              type='password'
              placeholder='type your password...'
              ref={passwordRef}
            />
          </div>

          <div className='form-item'>
            <Button type='submit' color='secondary' variant='contained'>
              Sign in
            </Button>
          </div>

          <div>
            Not a member?
            <Link to='/register'>
              <Button color='secondary' variant='outlined'>
                Sign Up
              </Button>
            </Link>
          </div>
        </form>
      </div>
    </>
  );
}

export default Login;
