'use client';

/** React. */
import { useEffect } from 'react';

/** Vendor. */
import Link from 'next/link';
import { useDispatch, useSelector } from 'react-redux';

/** Action. */
import { listMessage } from '../../redux/actions/message-actions';
import { listProject } from '../../redux/actions/project-actions';

/** Components. */
import Sprite from '../../components/ui/sprite';

export default function Admin() {
    /** Use selector. */
    const messageList = useSelector((state) => state.messageList);
    const { messages } = messageList;

    const projectList = useSelector((state) => state.projectList);
    const { projects } = projectList;

    /** Use dispatch. */
    const dispatch = useDispatch();

    /** Use effect. */
    useEffect(() => {
        /** Send dispatch to fetch messages list. */
        if (!messages) {
            dispatch(listMessage());
        }

        /** Send dispatch to fetch project list. */
        if (!projects) {
            dispatch(listProject());
        }
    }, [dispatch, messages, projects]);

    /** Return something. */
    return (
        <section className='p-2 flex min-h-screen flex-col gap-2'>
            <div className='grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 gap-2 h-fit'>
                <div className='pb-4 bg-gray-800 border-gray-700 rounded-t-md'>
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
                            <h1 className='p-2 text-xs uppercase bg-gray-700 text-gray-400 rounded-t-md'>Messages</h1>
                            <ul className='relative overflow-x-auto'>
                                {messages ? (
                                    messages.map((message, id) => {
                                        return (
                                            <li key={id} className='p-2 stripe text-xs'>
                                                <div className='flex flex-row justify-between'>
                                                    <span>{message.title}</span>
                                                    <Link href={`/message?id=${message._id}`}>
                                                        <span className='cursor-pointer text-slate-200'>
                                                            <Sprite id='view' />
                                                        </span>
                                                    </Link>
                                                </div>
                                            </li>
                                        );
                                    })
                                ) : (
                                    <li className='p-2 stripe text-xs'>No messages.</li>
                                )}
                            </ul>
                        </div>
                        <div className='w-full md:w-1/2'>
                            <div className='flex flex-row justify-between bg-gray-700 text-gray-400 rounded-t-md'>
                                <h1 className='p-2 text-xs text-slate-400 uppercase'>Projects</h1>
                                <p className='text-slate-200 mr-2 mt-1 cursor-pointer'>
                                    <Sprite id='create' />
                                </p>
                            </div>
                            <ul className='relative overflow-x-auto'>
                                {projects ? (
                                    projects.map((project, id) => {
                                        return (
                                            <li key={id} className='p-2 stripe text-xs'>
                                                <div className='flex flex-row justify-between'>
                                                    <span>{project.name}</span>
                                                    <div className='cursor-pointer'>
                                                        <span className='text-slate-200 mr-2'>
                                                            <Link href={`/project/${project.permalink}`}>
                                                                <Sprite id='view' />
                                                            </Link>
                                                        </span>
                                                        <span className='text-green-500 mr-2'>
                                                            <Sprite id='update' />
                                                        </span>
                                                        <span className='text-red-500'>
                                                            <Sprite id='delete' />
                                                        </span>
                                                    </div>
                                                </div>
                                            </li>
                                        );
                                    })
                                ) : (
                                    <li className='p-2 stripe text-xs'>No projects.</li>
                                )}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
