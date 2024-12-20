'use client';

/** React. */
import { useState, useEffect } from 'react';

/** Vendor. */
import Link from 'next/link';
import { useDispatch, useSelector } from 'react-redux';

/** Hooks. */
import useScreen from '../../hooks/use-screen';

/** Action. */
import { userLogout } from '../../redux/actions/user-actions.js';

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

    /** Select state from redux. */
    const userAuth = useSelector((state) => state.userAuth);
    const { logged } = userAuth;

    /** Use effect to monitor screen hook changes. */
    useEffect(() => {
        /** Switch navigation depends on screen size. */
        if (screen.isMobile) {
            setMobile(true);
            return;
        } else {
            setMobile(false);
        }
    }, [screen]);

    /** Use dispatch. */
    const dispatch = useDispatch();

    /** Logout handler. */
    function logoutHandler() {
        dispatch(userLogout());
    }
    /** Return something. */
    return (
        <nav className='flex flex-row p-2 justify-around align-center text-slate-300 scroll-animation'>
            <div className='text-left p-1 mt-3 w-6/12'>
                <Link href='/' className='w-40 text-green-400 hover:text-slate-300 cursor-pointer text-md hover:animatedanimate__animated hover:animate__bounce'>
                    <span className='font-bold'>&lt;/&gt;</span> Reijo Dev
                </Link>
            </div>
            <div className='sm:hidden p-1 mt-1 text-right w-6/12'>
                <button className={`hamburger hamburger-spring cursor-pointer ${hidden ? '' : 'is-active'}`} type='button'>
                    <span className='hamburger-box' onClick={hamburgerHandler}>
                        <span className='hamburger-inner'></span>
                    </span>
                </button>
            </div>

            {mobile ? (
                hidden ? (
                    ''
                ) : (
                    <div className={`flex flex-col absolute top-12 z-100 bg-slate-900 border border-slate-400 border-opacity-50 rounded-sm text-xs justify-start m-2 w-11/12 z-50`}>
                        <Link href='/' className='p-2 nav-border nav-hover cursor-pointer' onClick={hamburgerHandler}>
                            <Sprite id='home' /> Home
                        </Link>
                        <Link href='/project' className='p-2 nav-border nav-hover cursor-pointer' onClick={hamburgerHandler}>
                            <Sprite id='project' /> Project
                        </Link>
                        <Link href='/about' className='p-2 nav-border nav-hover cursor-pointer' onClick={hamburgerHandler}>
                            <Sprite id='about' /> About
                        </Link>
                        {logged === true ? (
                            <>
                                <Link href='/dashboard' className='p-2 nav-border nav-hover cursor-pointer' onClick={hamburgerHandler}>
                                    <Sprite id='logout' /> Dashboard
                                </Link>
                                <button className='p-2 nav-border nav-hover cursor-pointer' onClick={logoutHandler}>
                                    <Sprite id='logout' /> Logout
                                </button>
                            </>
                        ) : (
                            <>
                                <Link href='/contact' className='p-2 nav-border nav-hover cursor-pointer' onClick={hamburgerHandler}>
                                    <Sprite id='contact' /> Contact
                                </Link>
                                <Link href='/login' className='p-2 nav-border nav-hover cursor-pointer' onClick={hamburgerHandler}>
                                    <Sprite id='login' /> Login
                                </Link>
                            </>
                        )}
                    </div>
                )
            ) : (
                <div className={`flex flex-row justify-end m-2 w-11/12 text-xs z-50`}>
                    <Link href='/' className='p-2 nav-border nav-hover cursor-pointer'>
                        <Sprite id='home' /> Home
                    </Link>
                    <Link href='/project' className='p-2 nav-border nav-hover cursor-pointer'>
                        <Sprite id='project' /> Project
                    </Link>
                    <Link href='/about' className='p-2 nav-border nav-hover cursor-pointer'>
                        <Sprite id='about' /> About
                    </Link>

                    {logged === true ? (
                        <>
                            <Link href='/dashboard' className='p-2 nav-border nav-hover cursor-pointer'>
                                <Sprite id='logout' /> Dashboard
                            </Link>
                            <button className='p-2 nav-border nav-hover cursor-pointer' onClick={logoutHandler}>
                                <Sprite id='logout' /> Logout
                            </button>
                        </>
                    ) : (
                        <>
                            <Link href='/contact' className='p-2 nav-border nav-hover cursor-pointer'>
                                <Sprite id='contact' /> Contact
                            </Link>
                            <Link href='/login' className='p-2 nav-border nav-hover cursor-pointer'>
                                <Sprite id='login' /> Login
                            </Link>
                        </>
                    )}
                </div>
            )}
        </nav>
    );
}
