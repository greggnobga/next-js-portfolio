/** Components. */
import Sprite from '../../../components/sprite';

export async function generateStaticParams() {
  return [{ id: '1' }, { id: '2' }, { id: '3' }, { id: '4' }, { id: '5' }, { id: '6' }];
}

export default function PojectDetails({ params }) {
  const { id } = params;

  return (
    <section className='p-2 flex min-h-screen flex-col gap-2'>
      <div className='grid grid-cols-1 sm:grid-cols-2 place-content-start'>
        <div className='p-2'>
          <img className='object-cover object-top w-full h-[50vh] sm:h-ull rounded-t-lg' src='/images/trade.png' alt='' />
        </div>
        <div className='p-2'>
          <div className='flex flex-wrap justify-between'>
            <h1 className=' text-green-400 uppercase'>Portfolio Trade App</h1>
            <a className='text-xs text-slate-300' href='https://trade.buntod.com/' target='_blank'>
              Live Demo
            </a>
          </div>
          <hr className='w-full h-px my-2 bg-gray-200 border-0 dark:bg-gray-700' />
          <h3 className='py-2 font-thin text-sm uppercase'>
            <span className='text-green-400'>/</span> About this project
          </h3>
          <hr className='w-48 h-px my-2 bg-gray-200 border-0 dark:bg-gray-700' />
          <p className='py-2 text-slate-300 text-xs'>
            Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi
            tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem
            ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur.
          </p>
          <h3 className='py-2 font-thin text-sm uppercase'>
            <span className='text-green-400'>/</span> Technical Sheet
          </h3>
          <hr className='w-48 h-px my-2 bg-gray-200 border-0 dark:bg-gray-700' />
          <p className='py-2 text-slate-300 text-xs'>
            Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.
          </p>
          <ul className='py-2 text-slate-300 text-xs'>
            <li className='py-2'>
              <Sprite id='arrow-forward' /> Laravel
            </li>
            <li className='py-2'>
              <Sprite id='arrow-forward' /> MySQL
            </li>
            <li className='py-2'>
              <Sprite id='arrow-forward' /> React
            </li>
            <li className='py-2'>
              <Sprite id='arrow-forward' /> Redux
            </li>
            <li className='py-2'>
              <Sprite id='arrow-forward' /> Tailwind
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
