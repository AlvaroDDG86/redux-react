import { useRef } from 'react';
import classes from './Auth.module.css';
import { authActuons } from '../../store/slices/auth';
import { useDispatch } from 'react-redux';

const Auth = () => {
  const dispatch = useDispatch()
  const emailInputRef = useRef()
  const passwordInputRef = useRef()

  const submitHandler = (event) => {
    event.preventDefault()
    const email = emailInputRef.current.value
    const password = passwordInputRef.current.value
    console.log({
      email,
      password
    })
    dispatch(authActuons.login())
    emailInputRef.current.value = ''
    passwordInputRef.current.value = ''
  }

  return (
    <main className={classes.auth}>
      <section>
        <form onSubmit={submitHandler}>
          <div className={classes.control}>
            <label htmlFor='email'>Email</label>
            <input type='email' id='email' ref={emailInputRef} />
          </div>
          <div className={classes.control}>
            <label htmlFor='password'>Password</label>
            <input type='password' id='password' ref={passwordInputRef} />
          </div>
          <button>Login</button>
        </form>
      </section>
    </main>
  );
};

export default Auth;
