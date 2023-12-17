'use client';

/** React. */
import { useEffect } from 'react';

/** Vendor. */
import { useRouter } from 'next/navigation';
import { useSearchParams } from 'next/navigation';
import { useDispatch, useSelector } from 'react-redux';

/** Action. */
import { viewMessage } from '../../redux/actions/message-actions';

/** Component. */
import Loader from '../../components/loader';

export default function Message() {
    /** Use search params. */
    const searchParams = useSearchParams();

    /** Get id paramerter from search params. */
    const id = searchParams.get('id');

    /** Use selector. */
    const userAuth = useSelector((state) => state.userAuth);
    const { logged } = userAuth;

    const messageView = useSelector((state) => state.messageView);
    const { message } = messageView;

    /** Use dispatch. */
    const dispatch = useDispatch();

    /** Use router. */
    const router = useRouter();

    /** Use effect. */
    useEffect(() => {
        /** Check if id has value and then dispatch an action. */
        if (id) {
            dispatch(viewMessage(id));
        }
        /** Push to login if visitor is not authenticated. */
        if (!logged) {
            router.push('/login');
        }
    }, [dispatch, id, logged]);

    /** Return something */
    return (
        <section className='p-2 flex flex-col min-h-screen gap-2'>
            {message ? (
                <div className='p-4 flex flex-col place-items-center'>
                    <div className=' w-6/12 flex flex-row place-items-center border border-blue-400 stripe'>
                        <p className='w-1/4 p-2 text-xs text-slate-400 bg-gray-700'>Subject</p>
                        <p className='w-1/2 ml-2'>{message.title}</p>
                    </div>
                    <div className=' w-6/12 flex flex-row place-items-center border border-blue-400 stripe'>
                        <p className='w-1/4 p-2 text-xs text-slate-400 bg-gray-700'>Sender</p>
                        <p className='w-1/2 ml-2'>{message.name}</p>
                    </div>
                    <div className=' w-6/12 flex flex-row place-items-center border border-blue-400 stripe'>
                        <p className='w-1/4 p-2 text-xs text-slate-400 bg-gray-700'>Email</p>
                        <p className='w-1/2 ml-2'>{message.email}</p>
                    </div>
                    <div className=' w-6/12 p-2 flex flex-col place-items-center border border-blue-400 stripe'>
                        <p className='w-full p-2 text-xs text-slate-200 uppercase bg-gray-700 rounded-md'>Message</p>
                        <p className='w-full p-2 ml-2'>{message.message}</p>
                    </div>
                </div>
            ) : (
                <Loader />
            )}
        </section>
    );
}
