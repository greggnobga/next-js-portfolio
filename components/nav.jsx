'use client';

/** React. */
import { useState, useEffect } from 'react';

/** Vendor. */
import { useDispatch, useSelector } from 'react-redux';
import Link from 'next/link';

/** Hooks. */
import useScreen from '../hooks/use-screen';

/** Action. */
import { authUser } from '../redux/actions/user-actions.js';

/** Components. */
import Sprite from './sprite';

export default function Nav() {
  /** Use state. */
  const [hidden, setHidden] = useState(true);
  const [mobile, setMobile] = useState(true);

  /** Watch for screen size changes. */
  const screen = useScreen();

  /** Hamburger handler. */
  function hamburgerHandler() {
    setHidden((prev) => !prev);
  }

  /** Define dispatch. */
  const dispatch = useDispatch();

  /** Select state from redux. */
  const userAuth = useSelector((state) => state.userAuth);
  const { loading, success, error } = userAuth;

  /** Use effect to monitor screen hook changes. */
  useEffect(() => {
    if (screen.isMobile) {
      setMobile(true);
    } else {
      setMobile(false);
    }

    dispatch(authUser());
  }, [loading, success, error]);

  console.log(loading, success, error);

  /** Return something. */
  return (
    <nav className='flex flex-row p-2 justify-around align-center text-slate-300'>
      <div className='text-left p-1 mt-3 w-6/12'>
        <Link href='/' className='w-40 text-green-400 hover:text-slate-300'>
          <span className='font-bold'>&lt;/&gt;</span> Orion Dev
        </Link>
      </div>
      <div className='sm:hidden p-1 mt-1 text-right w-6/12'>
        <button className={`hamburger hamburger-spring ${hidden ? '' : 'is-active'}`} type='button'>
          <span className='hamburger-box' onClick={hamburgerHandler}>
            <span className='hamburger-inner'></span>
          </span>
        </button>
      </div>

      {mobile ? (
        hidden ? (
          ''
        ) : (
          <div
            className={`flex flex-col absolute top-12 z-100 bg-slate-900 border border-slate-400 border-opacity-50 rounded-sm text-xs justify-start m-2 w-11/12`}>
            <Link href='/' className='p-2 nav-border nav-hover' onClick={hamburgerHandler}>
              <Sprite id='home' /> Home
            </Link>
            <Link href='/project' className='p-2 nav-border nav-hover' onClick={hamburgerHandler}>
              <Sprite id='project' /> Project
            </Link>
            <Link href='/about' className='p-2 nav-border nav-hover' onClick={hamburgerHandler}>
              <Sprite id='about' /> About
            </Link>
            <Link href='/contact' className='p-2 nav-border nav-hover' onClick={hamburgerHandler}>
              <Sprite id='contact' /> Contact
            </Link>
            <Link href='/login' className='p-2 nav-border nav-hover' onClick={hamburgerHandler}>
              <Sprite id='login' /> Login
            </Link>
          </div>
        )
      ) : (
        <div className={`flex flex-row justify-end m-2 w-11/12 text-xs`}>
          <Link href='/' className='p-2 nav-border nav-hover'>
            <Sprite id='home' /> Home
          </Link>
          <Link href='/project' className='p-2 nav-border nav-hover' onClick={hamburgerHandler}>
            <Sprite id='project' /> Project
          </Link>
          <Link href='/about' className='p-2 nav-border nav-hover'>
            <Sprite id='about' /> About
          </Link>
          <Link href='/contact' className='p-2 nav-border nav-hover'>
            <Sprite id='contact' /> Contact
          </Link>
          <Link href='/login' className='p-2 nav-border nav-hover'>
            <Sprite id='login' /> Login
          </Link>
        </div>
      )}
    </nav>
  );
}
