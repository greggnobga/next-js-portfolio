'use client';

/** React. */
import { useEffect } from 'react';

/** Vendor. */
import { useRouter } from 'next/navigation';
import { useSelector } from 'react-redux';

export default function Dashboard() {
  /** Use selector */
  const userAuth = useSelector((state) => state.userAuth);
  const { logged } = userAuth;

  /** Use router. */
  const router = useRouter();

  /** Use effect. */
  useEffect(() => {
    /** If not logged redirect to login page. */
    if (!logged) {
      router.push('/login');
    }
  }, [logged]);

  /** Return something. */
  return (
    <section className='p-2 flex min-h-screen flex-col gap-2'>
      <h1>Dashboard</h1>
    </section>
  );
}
