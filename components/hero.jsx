/** Next. */
import Link from 'next/link';

/** Components. */
import Sprite from './sprite';

export default function Hero() {
  return (
    <div className='grid grid-rows-6 gap-4 w-full h-fit hero-bg-image bg-cover bg-center bg-no-repeat sm:rounded'>
      <div className='row-span-5 grid sm:grid-cols-6 gap-2 p-2 place-items-center'>
        <div className='col-span-4'>
          <div className='mt-4'>
            <hr className='w-24 h-px my-2 bg-gray-200 border-0 dark:bg-gray-700' />
            <h1 className='text-4xl p-2'>
              Hello! I'm Orion, a <span className='text-green-400'>web developer</span>.
            </h1>
            <p className='text-xs text-justify p-2'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>

            <Link href='/contact' className='block text-right mx-2'>
              <span className='border-b pb-2 text-xs nav-hover'>
                Contact Me <Sprite id='arrow-forward' />
              </span>
            </Link>
          </div>
          <div className='mt-4'>
            <hr className='w-24 h-px my-2 bg-gray-200 border-0 dark:bg-gray-700' />
            <h2 className='text-xl p-2'>About Me</h2>
            <p className='text-xs text-justify p-2'>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque
              ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
            </p>
            <Link href='/about' className='block text-right mx-2'>
              <span className='border-b pb-2 text-xs nav-hover'>
                Learn More <Sprite id='arrow-forward' />
              </span>
            </Link>
          </div>
          <div className='mt-4'>
            <hr className='w-24 h-px my-2 bg-gray-200 border-0 dark:bg-gray-700' />
            <h2 className='text-xl p-2'>My Work</h2>
            <p className='text-xs text-justify p-2'>
              Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui
              ratione voluptatem sequi nesciunt.
            </p>
            <Link href='/projects' className='block text-right mx-2'>
              <span className='border-b pb-2 text-xs nav-hover'>
                Learn More <Sprite id='arrow-forward' />
              </span>
            </Link>
          </div>
        </div>
      </div>
      <div className='row-span-1 grid grid-cols-1 place-items-end'>
        <div className='mt-2 mb-4 px-2 w-full'>
          <hr className='w-full h-px my-2 bg-gray-200 border-0 dark:bg-gray-700' />
          <h2 className='text-right text-xs p-2'>Follow Me</h2>
          <div className='text-right'>
            <Link href='#' className='p-2 nav-border nav-hover'>
              <Sprite id='google' />
            </Link>
            <Link href='#' className='p-2 nav-border nav-hover'>
              <Sprite id='facebook' />
            </Link>
            <Link href='#' className='p-2 nav-border nav-hover'>
              <Sprite id='instagram' />
            </Link>
            <Link href='#' className='p-2 nav-border nav-hover'>
              <Sprite id='twitter' />
            </Link>
            <Link href='#' className='p-2 nav-border nav-hover'>
              <Sprite id='linked' />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
