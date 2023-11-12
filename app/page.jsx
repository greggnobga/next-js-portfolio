/** Next. */
import Link from 'next/link';

/** Components. */
import Sprite from '../components/sprite';
import Hero from '../components/hero';
import Card from '../components/card';

export default function Home() {
  return (
    <section className='p-2 flex flex-wrap flex-col'>
      <Hero />
      <div className='grid grid-cols-1 sm:grid-cols-2 place-items-center bg-slate-800 bg-opacity-20 w-full h-fit sm:h-[75vh]'>
        <div className='p-2'>
          <h3 className='p-2 font-thin uppercase text-sm'>
            <span className='text-green-400'>/</span> About Me
          </h3>
          <h1 className='p-2 text-3xl'>I've been developing websites since 0000</h1>
          <p className='p-2 text-xs text-justify'>
            Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi
            tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem
            ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur. Quis autem vel eum iure reprehenderit qui in ea
            voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur.
          </p>
          <Link href='/about' className='block text-right mb-2'>
            <span className='border-b pb-2 text-xs nav-hover'>
              More About Me <Sprite id='arrow-forward' />
            </span>
          </Link>
        </div>
        <div className='p-2'>
          <div className='p-2 flex flex-row flex-wrap justify-around align-center'>
            <div className='w-32 sm:w-48 pb-4 text-center'>
              <span className='text-3xl'>00</span> <span className='text-xs'>Years of experience</span>
            </div>
            <div className='w-32 sm:w-48 text-center'>
              <span className='text-3xl'>00</span> <span className='text-xs'>Successful projects</span>
            </div>
          </div>
          <div className='p-2'>
            <p className='p-2 text-xs text-justify'>
              Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi
              consequatur. Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum
              qui dolorem eum fugiat quo voluptas nulla pariatur.
            </p>
          </div>
        </div>
      </div>

      <div className='grid grid-cols-1 place-items-start bg-slate-700 bg-opacity-20 w-full h-[50vh]'>
        <div className='p-0'>
          <h3 className='p-2 font-thin uppercase text-sm'>
            <span className='text-green-400'>/</span> Dev Stacks
          </h3>
        </div>
        <div className='grid grid-cols-3 place-items-center w-full'>
          <div className='p-1 text-xs sm:p-2 sm:text-sm'>
            <h2 className='text-sm font-thin'>Server</h2>
            <hr className='w-24 h-px my-1 bg-gray-200 border-0 dark:bg-gray-700' />
            <p className='px-2 py-2'>
              <Sprite id='arrow-forward' /> Docker
            </p>
            <p className='px-2 py-2'>
              <Sprite id='arrow-forward' /> Apache
            </p>
            <p className='px-2 py-2'>
              <Sprite id='arrow-forward' /> Node
            </p>
          </div>
          <div className='p-1 text-xs sm:p-2 sm:text-sm'>
            <h2 className='text-sm font-thin'>Backend</h2>
            <hr className='w-24 h-px my-1 bg-gray-200 border-0 dark:bg-gray-700' />
            <p className='px-2 py-2'>
              <Sprite id='arrow-forward' /> Laravel
            </p>
            <p className='px-2 py-2'>
              <Sprite id='arrow-forward' /> Wordpress
            </p>
            <p className='px-2 py-2'>
              <Sprite id='arrow-forward' /> Django
            </p>
          </div>
          <div className='p-1 text-xs sm:p-2 sm:text-sm'>
            <h2 className='text-sm font-thin'>Frontend</h2>
            <hr className='w-24 h-px my-1 bg-gray-200 border-0 dark:bg-gray-700' />
            <p className='px-4 py-2'>
              <Sprite id='arrow-forward' /> Next JS
            </p>
            <p className='px-4 py-2'>
              <Sprite id='arrow-forward' /> React
            </p>
            <p className='px-4 py-2'>
              <Sprite id='arrow-forward' /> Tailwind
            </p>
          </div>
        </div>
      </div>

      <div className='grid grid-cols-1 place-items-start bg-slate-800 bg-opacity-20 w-full h-fit'>
        <div className='p-2'>
          <h3 className='p-2 font-thin uppercase text-sm'>
            <span className='text-green-400'>/</span> Featured Projects
          </h3>
        </div>
        <div className='grid grid-cols-1 gap-2 sm:grid-cols-3 place-items-start w-full'>
          <Card
            title='Portfolio Trade App'
            image='/images/trade.png'
            link='/project/1'
            description='A Laravel React Plus Tailwind application will track stock price changes and allow the user to manage portfolio holdings.'
            badge={['laravel', 'mysql', 'react', 'tailwind']}
          />

          <Card
            title='Portfolio Trade App'
            image='/images/trade.png'
            link='/project/1'
            description='A Laravel React Plus Tailwind application will track stock price changes and allow the user to manage portfolio holdings.'
            badge={['laravel', 'mysql', 'react', 'tailwind']}
          />

          <Card
            title='Portfolio Trade App'
            image='/images/trade.png'
            link='/project/1'
            description='A Laravel React Plus Tailwind application will track stock price changes and allow the user to manage portfolio holdings.'
            badge={['laravel', 'mysql', 'react', 'tailwind']}
          />
        </div>
      </div>
    </section>
  );
}
