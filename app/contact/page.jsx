'use client';

/** React. */
import { useEffect } from 'react';

/* Vendor. */
import { useRouter } from 'next/navigation';
import { useDispatch, useSelector } from 'react-redux';

/** Action. */
import { sendMessage } from '../../redux/actions/message-actions';
import { resetToast } from '../../redux/actions/toast-actions';

/** Hook. */
import useValidator from '../../hooks/use-validator';

/** Component. */
import Notifications from '../../components/ui/notifications';

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
        value: title,
        hasError: titleHasError,
        isValid: titleIsValid,
        valueChangeHandler: titleChangeHandler,
        inputBlurHandler: titleBlurHandler,
        resetHandler: titleInputReset,
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
    const titleInputClasses = titleHasError ? 'input-error' : 'input-success';
    const messageInputClasses = messageHasError ? 'input-error' : 'input-success';

    /** Set overall form validity. */
    let formIsValid = false;
    if (nameIsValid && titleIsValid && emailIsValid && messageIsValid) {
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
        titleBlurHandler(true);
        messageBlurHandler(true);

        /** Check if there is invalid input. */
        if (!emailIsValid && !nameIsValid && !titleIsValid && !messageIsValid) return;

        /** Dispatch actions. */
        dispatch(sendMessage({ email, name, title, message }));

        /** Reset input. */
        emailInputReset();
        nameInputReset();
        titleInputReset();
        messageInputReset();
    }

    /** Use selector. */
    const userAuth = useSelector((state) => state.userAuth);
    const { logged } = userAuth;

    const toastMessage = useSelector((state) => state.toastMessage);
    const { status: responseStatus, message: responseMessage } = toastMessage;

    /** Use router. */
    const router = useRouter();

    /** Use effect. */
    useEffect(() => {
        /** If logged push to dashboard. */
        if (logged) {
            router.push('/dashboard');
        }

        /** Check if response has value. */
        if (responseMessage) {
            /** Timer clean up function. */
            const timer = setTimeout(() => {
                /** Reset message. */
                dispatch(resetToast());
            }, 5000);

            /** Clear running timer. */
            return () => clearTimeout(timer);
        }
    }, [dispatch, logged, responseMessage]);

    /** Return something. */
    return (
        <section className='p-2 flex min-h-screen flex-col gap-2 z-10'>
            <h1 className='p-2 font-thin uppercase text-sm'>
                <span className='text-green-400'>/</span> Contact
            </h1>
            {responseMessage && <Notifications status={responseStatus} message={responseMessage} />}
            <div className='p-2 grid grid-cols-1'>
                <form onSubmit={submitHandler}>
                    <p className='pb-4 text-xs text-slate-400'>
                        To ensure that the email is correctly routed to the work email and stays out of the spam bin, start the subject line with [Dev].
                    </p>
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
                        {emailHasError ? <p className='input-message'>Please enter a valid email.</p> : ''}
                        <label htmlFor='email' className='peer-focus:font-medium input-label scroll-page'>
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
                        {nameHasError ? <p className='input-message'>Please enter a valid name.</p> : ''}
                        <label htmlFor='name' className='peer-focus:font-medium input-label scroll-page'>
                            Name
                        </label>
                    </div>
                    <div className='relative z-0 w-full mb-6 group'>
                        <input
                            className={`peer ${titleInputClasses}`}
                            id='title'
                            name='title'
                            type='text'
                            value={title}
                            onChange={titleChangeHandler}
                            onBlur={titleBlurHandler}
                            autoComplete='off'
                            placeholder=''
                            required
                        />
                        {titleHasError ? <p className='input-message'>Please enter a valid name.</p> : ''}
                        <label htmlFor='name' className='peer-focus:font-medium input-label scroll-page'>
                            Subject
                        </label>
                    </div>
                    <div className='relative z-0 w-full mb-6 group'>
                        <label htmlFor='message' className='block mb-2 text-sm font-medium text-gray-900text-white scroll-page'>
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
                        {messageHasError ? <p className='input-message'>One of the characters you entered is not allowed.</p> : ''}
                    </div>
                    <button type='submit' className='button-primary' disabled={!formIsValid}>
                        Send Message
                    </button>
                </form>
            </div>
        </section>
    );
}
