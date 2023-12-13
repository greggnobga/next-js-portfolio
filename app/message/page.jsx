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
                <div>
                    <p>Title: {message.title}</p>
                    <p>Sender Name: {message.name}</p>
                    <p>Sender Email: {message.email}</p>
                    <p>Message: {message.message}</p>
                    <p>Read: {message.read ? 'True' : 'False'}</p>
                </div>
            ) : (
                <Loader />
            )}
        </section>
    );
}
