/** Next. */
import Link from 'next/link';

/** Components. */
import Sprite from './sprite';

export default function Footer() {
    return (
        <footer className='bg-slate-900'>
            <div className='p-2 grid grid-cols-1 sm:grid-cols-3'>
                <div className='p-2 font-thin text-sm w-full'>
                    <h1 className='uppercase'>
                        <span className='text-green-400'>/</span> Resources
                    </h1>
                    <hr className='w-full h-px my-1 bg-gray-200 border-0 dark:bg-gray-700' />
                    <Link href='/'>
                        <span className='py-2 w-full block border-b border-gray-700 border-opacity-40'>
                            <Sprite id='home' /> Home
                        </span>
                    </Link>
                    <Link href='/project'>
                        <span className='py-2 w-full block border-b border-gray-700 border-opacity-40'>
                            <Sprite id='project' /> Project
                        </span>
                    </Link>
                    <Link href='/about'>
                        <span className='py-2 w-full block border-b border-gray-700 border-opacity-40'>
                            <Sprite id='about' /> About
                        </span>
                    </Link>
                    <Link href='/contact'>
                        <span className='py-2 w-full block border-b border-gray-700 border-opacity-40'>
                            <Sprite id='contact' /> Contact
                        </span>
                    </Link>
                    <Link href='/login'>
                        <span className='py-2 w-full block border-b border-gray-700 border-opacity-40'>
                            <Sprite id='login' /> Login
                        </span>
                    </Link>
                </div>
                <div className='p-2 font-thin text-sm w-full'>
                    <h1 className='uppercase'>
                        <span className='text-green-400'>/</span> Socials
                    </h1>
                    <hr className='w-full h-px my-1 bg-gray-200 border-0 dark:bg-gray-700' />
                    <Link href='#'>
                        <span className='py-2 w-full block border-b border-gray-700 border-opacity-40'>
                            <Sprite id='google' /> Google
                        </span>
                    </Link>
                    <Link href='#'>
                        <span className='py-2 w-full block border-b border-gray-700 border-opacity-40'>
                            <Sprite id='facebook' /> Facebook
                        </span>
                    </Link>
                    <Link href='#'>
                        <span className='py-2 w-full block border-b border-gray-700 border-opacity-40'>
                            <Sprite id='instagram' /> Instagram
                        </span>
                    </Link>
                    <Link href='#'>
                        <span className='py-2 w-full block border-b border-gray-700 border-opacity-40'>
                            <Sprite id='twitter' /> Twitter
                        </span>
                    </Link>
                    <Link href='#'>
                        <span className='py-2 w-full block border-b border-gray-700 border-opacity-40'>
                            <Sprite id='linked' /> LinkedIn
                        </span>
                    </Link>
                </div>
                <div className='p-2 font-thin text-sm w-full h-[25vh] sm:=h-full'>
                    <h1 className='uppercase'>
                        <span className='text-green-400'>/</span> Contact Me
                    </h1>
                    <hr className='w-full h-px my-1 bg-gray-200 border-0 dark:bg-gray-700' />
                    <div className='grid grid-cols-1 place-items-center align-middle w-full h-full'>
                        <Link href='/contact'>Send Reijo N A Message</Link>
                    </div>
                </div>
            </div>
            <div className='w-full text-center text-xs font-thin'>All rights reserved. San Jose Del Monte, Bulacan, Philippines.</div>
        </footer>
    );
}
