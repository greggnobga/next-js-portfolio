'use client';

/** React. */
import { useEffect } from 'react';

/** Vendor. */
import Link from 'next/link';
import { useDispatch, useSelector } from 'react-redux';

/** Action. */
import { listMessage } from '../../redux/actions/message-actions';

/** Components. */
import Sprite from '../../components/sprite';

export default function Admin() {
    /** Use selector. */
    const messageList = useSelector((state) => state.messageList);
    const messages = messageList;

    /** Use dispatch. */
    const dispatch = useDispatch();

    /** Use effect. */
    useEffect(() => {
        /** Send dispatch to fetch list of messages. */
        if (!messages) {
            dispatch(listMessage());
        }
    }, [messages]);

    /** Return something. */
    return (
        <section className='p-2 flex min-h-screen flex-col gap-2'>
            <div className='grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 gap-2 h-fit'>
                <div className='pb-4 bg-gray-50 dark:bg-gray-800 dark:border-gray-700 rounded-t-md'>
                    <div className='pt-4 flex place-content-center'>
                        <div className='p-4'>
                            <img className='w-24 h-24 border shadow rounded-full' src='/images/about.png' alt='Orion' />
                        </div>
                    </div>
                    <div className='p-2 flex place-content-center border-bottom mr-2 ml-2'>
                        <p>Reijo N</p>
                    </div>
                    <div className='flex flex-row place-content-center border-bottom mr-2 ml-2'>
                        <Link href='#' className='p-2 hover-green'>
                            <Sprite id='google' />
                        </Link>
                        <Link href='#' className='p-2 hover-green'>
                            <Sprite id='facebook' />
                        </Link>
                        <Link href='#' className='p-2 hover-green'>
                            <Sprite id='instagram' />
                        </Link>
                        <Link href='#' className='p-2 hover-green'>
                            <Sprite id='twitter' />
                        </Link>
                        <Link href='#' className='p-2 hover-green'>
                            <Sprite id='linked' />
                        </Link>
                    </div>
                    <div className='pt-2 flex justify-center align-center'>
                        <div className='p-2 text-sm'>
                            <p className='uppercase'>Projects</p>
                            <p className='pt-2 text-lg text-center'>100</p>
                        </div>
                        <div className='p-2 text-sm'>
                            <p className='uppercase'>Messages</p>
                            <p className='pt-2 text-lg text-center'>100</p>
                        </div>
                    </div>
                </div>
                <div className='pb-4 col-span-3'>
                    <div className='flex flex-col sm:flex-row gap-2 h-fit'>
                        <div className='w-full md:w-1/2'>
                            <h1 className='p-2 text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 rounded-t-md'>Messages</h1>
                            <ul className='relative overflow-x-auto'>
                                {messages &&
                                    messages.map((message, id) => {
                                        console.log(message._id);
                                        return (
                                            <li key={id} className='p-2 stripe text-xs'>
                                                <Link href={`/dashboard/${message._id}`}>{message.title}</Link>
                                            </li>
                                        );
                                    })}
                            </ul>
                        </div>
                        <div className='w-full md:w-1/2'>
                            <h1 className='p-2 text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 rounded-t-md'>Projects</h1>
                            <ul className='relative overflow-x-auto'>
                                <li className='p-2 stripe text-xs'>Project 1</li>
                                <li className='p-2 stripe text-xs'>Project 2</li>
                                <li className='p-2 stripe text-xs'>Project 3</li>
                                <li className='p-2 stripe text-xs'>Project 4</li>
                                <li className='p-2 stripe text-xs'>Project 5</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
