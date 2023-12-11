'use client';

/** React. */
import { useEffect, useState } from 'react';

/** Vendor. */
import { useRouter } from 'next/navigation';
import { useSelector } from 'react-redux';

/** Components. */
import Admin from './admin';
import User from './user';

export default function Dashboard() {
  /** Use state. */
  const [isAdmin, setIsAdmin] = useState(false);

  /** Use selector */
  const userAuth = useSelector((state) => state.userAuth);
  const { logged, admin } = userAuth;

  /** Use router. */
  const router = useRouter();

  /** Use effect. */
  useEffect(() => {
    /** If not logged redirect to login page. */
    if (!logged) {
      router.push('/login');
    }
    /** Set state. */
    setIsAdmin(admin);
  }, [logged, admin]);

  /** Return something. */
  return <section className='p-2 flex min-h-screen flex-col gap-2'>{isAdmin ? <Admin /> : <User />}</section>;
}
