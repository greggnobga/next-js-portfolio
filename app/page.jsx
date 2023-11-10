/** Next. */
import Link from 'next/link';

/** Components. */
import Sprite from '../components/sprite';
import Hero from '../components/hero';

export default function Home() {
  return (
    <section className='flex flex-col'>
      <Hero />
      <div className='grid grid-cols-1 sm:grid-cols-2 place-items-center bg-slate-800 bg-opacity-20 w-full h-max'>
        <div className='p-4'>
          <h3 className='p-4 font-thin uppercase text-sm'>
            <span className='text-green-400'>/</span> About Me
          </h3>
          <h1 className='p-4 text-3xl'>I've been developing websites since 0000</h1>
          <p className='p-4 text-xs text-justify'>
            Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi
            tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem
            ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur. Quis autem vel eum iure reprehenderit qui in ea
            voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur.
          </p>
          <Link href='/about' className='block text-right mb-2'>
            <span className='border-b pb-2 text-xs'>
              More About Me <Sprite id='arrow-forward' />
            </span>
          </Link>
        </div>
        <div className='p-4'>
          <div className='p-4 flex flex-col sm:flex-row justify-around align-center'>
            <div className='w-48 sm:w-full pb-4 text-center'>
              <span className='text-3xl'>00</span> <span className='text-xs'>Years of experience</span>
            </div>
            <div className='w-48 sm:w-full text-center'>
              <span className='text-3xl'>00</span> <span className='text-xs'>Successful projects</span>
            </div>
          </div>
          <div className='p-4'>
            <p className='text-xs text-justify'>
              Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi
              consequatur. Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum
              qui dolorem eum fugiat quo voluptas nulla pariatur.
            </p>
          </div>
        </div>
      </div>

      <div className='grid grid-cols-1 place-items-start bg-slate-800 bg-opacity-20 w-full h-max'>
        <div className='p-4'>
          <h3 className='p-4 font-thin uppercase text-sm'>
            <span className='text-green-400'>/</span> Dev Stacks
          </h3>
        </div>
      </div>
    </section>
  );
}
