'use client';

/** Components. */
import Sprite from './sprite';

export default function Notifications({ status, message }) {
    /** Default status code. */
    const code = status ? status : 200;

    /** Evaluate status and display tailwind class accordingly. */
    const variant = code <= 300 ? 'text-green-500 text-green-400' : 'text-red-500 text-red-400';

    /** Return something. */
    return (
        <div
            className={`fixed flex items-center w-full max-w-xs p-4 space-x-4 ${variant}  divide-x rtl:divide-x-reverse  rounded-lg shadow top-5 right-5 divide-gray-700 space-x bg-gray-800 z-10`}
            role='alert'>
            <span className='text-sm font-normal'>
                {code <= 300 ? <Sprite id='mail' /> : <Sprite id='alert' />} {message}
            </span>
        </div>
    );
}
