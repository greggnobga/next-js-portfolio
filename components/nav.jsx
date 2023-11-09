'use client';

import { useState } from 'react';

import Sprite from './sprite';
export default function Nav() {
  const [hidden, setHidden] = useState(true);

  const hamburgerHandler = () => {
    setHidden((prev) => !prev);
  };

  return (
    <nav className='flex flex-row justify-around align-center'>
      <div className='text-left mt-3 p-1 w-6/12'>
        <span className='text-blue-800 font-bold'>&lt;/&gt;</span> Orion
      </div>
      <div className='sm:hidden p-1 mt-1 text-right w-6/12'>
        <button class={`hamburger hamburger-spring ${hidden ? '' : 'is-active'}`} type='button'>
          <span class='hamburger-box' onClick={hamburgerHandler}>
            <span class='hamburger-inner'></span>
          </span>
        </button>
      </div>
      <div
        className={`${
          hidden ? 'hidden' : 'block absolute top-12 z-100 bg-slate-900 border border-slate-400 border-opacity-50 rounded-sm'
        } sm:flex sm:flex-row flex-col justify-end m-2 w-11/12 text-slate-300`}>
        <p className='p-2 nav-border nav-hover'>
          <Sprite id='home' /> Home
        </p>
        <p className='p-2 nav-border nav-hover'>
          <Sprite id='about' /> About
        </p>
        <p className='p-2 nav-border nav-hover'>
          <Sprite id='contact' /> Contact
        </p>
        <p className='p-2 nav-border nav-hover'>
          <Sprite id='login' /> Login
        </p>
      </div>
    </nav>
  );
}
