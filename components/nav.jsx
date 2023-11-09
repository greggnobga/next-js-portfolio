'use client';

/** React */
import { useState, useEffect } from 'react';

/** Next */
import Link from 'next/link';

/** Hooks */
import useScreen from '../hooks/use-screen';

/** Components */
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
    console.log(hidden);
  }

  /** Use effect to monitor screen hook changes. */
  useEffect(() => {
    if (screen.isMobile) {
      setMobile(true);
    } else {
      setMobile(false);
    }
  }, [screen]);

  /** Return something. */
  return (
    <nav className='flex flex-row justify-around align-center text-slate-300'>
      <div className='text-left mt-3 p-1 w-6/12'>
        <Link href='/' className='p-2 nav-hover w-40'>
          <span className='text-blue-800 font-bold'>&lt;/&gt;</span> Orion
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
            className={`flex flex-col absolute top-12 z-100 bg-slate-900 border border-slate-400 border-opacity-50 rounded-sm justify-start m-2 w-11/12`}>
            <Link href='/' className='p-2 nav-border nav-hover' onClick={hamburgerHandler}>
              <Sprite id='home' /> Home
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
        <div className={`flex flex-row justify-end m-2 w-11/12`}>
          <Link href='/' className='p-2 nav-border nav-hover'>
            <Sprite id='home' /> Home
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
