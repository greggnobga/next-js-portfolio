'use client';

/** React. */
import { useEffect } from 'react';

/* Vendor. */
import { useDispatch, useSelector } from 'react-redux';

/** Action. */
import { messageContact, messageReset } from '../../redux/actions/contact-actions';

/** Hook. */
import useValidator from '../../hooks/use-validator';

/** Component. */
import Notifications from '../../components/notifications';

export default function Contact() {
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
    value: name,
    hasError: nameHasError,
    isValid: nameIsValid,
    valueChangeHandler: nameChangeHandler,
    inputBlurHandler: nameBlurHandler,
    resetHandler: nameInputReset,
  } = useValidator((value) => value.trim() !== '' && value.match(/^[ A-Za-z0-9!@#$%^&*()_+]*$/));

  const {
    value: message,
    hasError: messageHasError,
    isValid: messageIsValid,
    valueChangeHandler: messageChangeHandler,
    inputBlurHandler: messageBlurHandler,
    resetHandler: messageInputReset,
  } = useValidator((value) => value.trim() !== '' && value.match(/^[ A-Za-z0-9.'?!,@$#\-_]*$/));

  /** Change class logic if valid or otherwise. */
  const nameInputClasses = nameHasError ? 'input-error' : 'input-success';
  const emailInputClasses = emailHasError ? 'input-error' : 'input-success';
  const messageInputClasses = messageHasError ? 'input-error' : 'input-success';

  /** Set overall form validity. */
  let formIsValid = false;
  if (nameIsValid && messageIsValid) {
    formIsValid = true;
  }

  /** Use dispatch. */
  const dispatch = useDispatch();

  /** Submit hanndler. */
  function submitHandler(e) {
    e.preventDefault();

    /** Change blur state. */
    emailBlurHandler(true);
    nameBlurHandler(true);
    messageBlurHandler(true);

    /** Check if there is invalid input. */
    if (!emailIsValid && !nameIsValid && !messageIsValid) return;

    /** Dispatch actions. */
    dispatch(messageContact({ email, name, message }));

    /** Reset input. */
    emailInputReset();
    nameInputReset();
    messageInputReset();
  }

  /** Use selector. */
  const contactMessage = useSelector((state) => state.contactMessage);
  const { status: responseStatus, message: responseMessage } = contactMessage;

  /** Use effect. */
  useEffect(() => {
    /** Check if response has value. */
    if (responseMessage) {
      const timer = setTimeout(() => {
        /** Reset message. */
        dispatch(messageReset());
      }, 5000);
      /** Clear running timer. */
      return () => clearTimeout(timer);
    }
  }, [responseMessage]);

  /** Return something. */
  return (
    <section className='p-2 flex min-h-screen flex-col gap-2 z-10'>
      <h1 className='p-2 font-thin uppercase text-sm'>
        <span className='text-green-400'>/</span> Contact
      </h1>
      {responseMessage && <Notifications status={responseStatus} message={responseMessage} />}
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
              className={`peer ${nameInputClasses}`}
              id='name'
              name='name'
              type='text'
              value={name}
              onChange={nameChangeHandler}
              onBlur={nameBlurHandler}
              autoComplete='off'
              placeholder=''
              required
            />
            {nameHasError && <p className='input-message'>Please enter a valid name.</p>}
            <label htmlFor='name' className='peer-focus:font-medium input-label'>
              Name
            </label>
          </div>

          <div className='relative z-0 w-full mb-6 group'>
            <label htmlFor='message' className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>
              Your message
            </label>
            <textarea
              className={messageInputClasses}
              id='message'
              name='message'
              type='message'
              rows='6'
              value={message}
              onChange={messageChangeHandler}
              onBlur={messageBlurHandler}
              autoComplete='off'
              placeholder='Type your message here.'
              required></textarea>
            {messageHasError && <p className='input-message'>One of the characters you entered is not allowed.</p>}
          </div>
          <button type='submit' className='button-primary' disabled={!formIsValid}>
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}
