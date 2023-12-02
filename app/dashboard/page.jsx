'use client';

/** React. */
import { useEffect } from 'react';

/** Vendor. */
import { redirect } from 'next/navigation';
import { useSelector } from 'react-redux';

export default function Dashboard() {
  /** Use selector */
  const userAuth = useSelector((state) => state.userAuth);
  const { token } = userAuth;

  /** Use effect. */
  useEffect(() => {
    if (!token) {
      redirect('/login');
    }
  }, [token]);

  /** Return something. */
  return (
    <section className='p-2 flex min-h-screen flex-col gap-2'>
      <h1>Dashboard</h1>
    </section>
  );
}
