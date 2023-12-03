'use client';

/** React. */
import { useEffect } from 'react';

/** Vendor. */
import { useRouter } from 'next/navigation';
import { useDispatch, useSelector } from 'react-redux';

/** Action. */
import { userLogin } from '../../redux/actions/user-actions';

/** Hook. */
import useValidator from '../../hooks/use-validator';

export default function Login() {
  /** Map html element to validate hook. */
  const {
    value: email,
    hasError: emailHasError,
    isValid: emailIsValid,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    resetHandler: emailInputReset,
  } = useValidator((value) => value.trim() !== '' && value.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/));

  const {
    value: password,
    hasError: passwordHasError,
    isValid: passwordIsValid,
    valueChangeHandler: passwordChangeHandler,
    inputBlurHandler: passwordBlurHandler,
    resetHandler: passwordInputReset,
  } = useValidator((value) => value.trim() !== '' && value.match(/^[ A-Za-z0-9!@#$%^&*()_+]*$/));

  /** Change class logic if valid or otherwise. */
  const emailInputClasses = emailHasError ? 'input-error' : 'input-success';
  const passwordInputClasses = passwordHasError ? 'input-error' : 'input-success';

  /** Set overall form validity. */
  let formIsValid = false;
  if (emailIsValid && passwordIsValid) {
    formIsValid = true;
  }

  /** Use dispatch. */
  const dispatch = useDispatch();

  /** Submit hanndler. */
  function submitHandler(e) {
    /** Prevent browser default behaviour */
    event.preventDefault();

    /** Change blur state. */
    emailBlurHandler(true);
    passwordBlurHandler(true);

    /** Check if there is invalid input. */
    if (!emailIsValid && !passwordIsValid) {
      return;
    }

    /** Dispatch action. */
    dispatch(userLogin({ email, password }));

    /** Reset input. */
    emailInputReset();
    passwordInputReset();
  }

  /** Use selector. */
  const userAuth = useSelector((state) => state.userAuth);
  const { logged } = userAuth;

  /** Use router. */
  const router = useRouter();

  /** Use effect. */
  useEffect(() => {
    /** Check if token is set. */
    if (logged) {
      router.push('/dashboard');
    }
  }, [logged]);

  /** Return something. */
  return (
    <section className='p-2 flex min-h-screen flex-col gap-2 z-10' suppressHydrationWarning={true}>
      <h1 className='p-2 font-thin uppercase text-sm'>
        <span className='text-green-400'>/</span> Login
      </h1>
      <div className='p-2 grid grid-cols-1'>
        <form onSubmit={submitHandler}>
          <div className='relative z-0 w-full mb-6 group'>
            <input
              className={`peer ${emailInputClasses}`}
              id='email'
              name='email'
              type='email'
              value={email}
              onChange={emailChangeHandler}
              onBlur={emailBlurHandler}
              autoComplete='off'
              placeholder=''
              required
            />
            {emailHasError && <p className='input-message'>Please enter a valid email.</p>}
            <label htmlFor='email' className='peer-focus:font-medium input-label'>
              Email address
            </label>
          </div>
          <div className='relative z-0 w-full mb-6 group'>
            <input
              className={`peer ${passwordInputClasses}`}
              id='password'
              name='password'
              type='password'
              value={password}
              onChange={passwordChangeHandler}
              onBlur={passwordBlurHandler}
              autoComplete='off'
              placeholder=''
              required
            />
            {passwordHasError && <p className='input-message'>Please enter a valid password.</p>}
            <label htmlFor='email' className='peer-focus:font-medium input-label'>
              Password
            </label>
          </div>
          <button type='submit' className='button-primary' disabled={!formIsValid}>
            Login
          </button>
        </form>
      </div>
    </section>
  );
}
