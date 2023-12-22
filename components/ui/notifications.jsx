'use client';

/** Components. */
import Sprite from './sprite';

export default function Notifications({ status, message }) {
    /** Default status code. */
    const code = status ? status : 200;

    /** Evaluate status and display tailwind class accordingly. */
    const variant = code <= 300 ? 'text-green-500 dark:text-green-400' : 'text-red-500 dark:text-red-400';

    /** Return something. */
    return (
        <div
            className={`fixed flex items-center w-full max-w-xs p-4 space-x-4 ${variant} bg-white divide-x rtl:divide-x-reverse divide-gray-200 rounded-lg shadow top-5 right-5 dark:divide-gray-700 space-x dark:bg-gray-800 z-10`}
            role='alert'>
            <span className='text-sm font-normal'>
                {code <= 300 ? <Sprite id='mail' /> : <Sprite id='alert' />}
                {message}
            </span>
        </div>
    );
}
