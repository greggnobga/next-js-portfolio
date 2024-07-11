/** Next. */
import Link from 'next/link';

/** Components. */
import Sprite from './sprite';

export default function Hero() {
    return (
        <div className='grid grid-rows-6 gap-4 w-full h-fit hero-bg-image bg-cover bg-right bg-no-repeat sm:rounded'>
            <div className='row-span-5 grid sm:grid-cols-6 gap-2 p-2 place-items-center'>
                <div className='col-span-4'>
                    <div className='mt-4'>
                        <hr className='w-24 h-px my-2 border-0 bg-gray-700' />
                        <h1 className='text-4xl p-2'>
                            Hello! I'm Reijo N, a <span className='text-green-400'>freelance full stack web developer</span>.
                        </h1>
                        <p className='text-xs text-left p-2'>
                            If you require a responsive and modern website that will be in the forefront of your profession or business, please do not hesitate to contact us, as we
                            are presently offering a fair price.
                        </p>

                        <Link href='/contact' className='block text-right mx-2'>
                            <span className='border-b pb-2 text-xs nav-hover'>
                                Contact Me <Sprite id='arrow-forward' />
                            </span>
                        </Link>
                    </div>
                    <div className='mt-4'>
                        <hr className='w-24 h-px my-2 border-0 bg-gray-700' />
                        <h2 className='text-xl p-2'>About Me</h2>
                        <p className='text-xs text-left p-2'>
                            In the southern Philippines, in the early 1990s, technology was as scarce as gold. A boy was attracted by the concept of making anything just by sitting
                            in front of a flickering screen. A dream becomes a reality through determination and hard effort.
                        </p>
                        <Link href='/about' className='block text-right mx-2'>
                            <span className='border-b pb-2 text-xs nav-hover'>
                                Learn More <Sprite id='arrow-forward' />
                            </span>
                        </Link>
                    </div>
                    <div className='mt-4'>
                        <hr className='w-24 h-px my-2 border-0 bg-gray-700' />
                        <h2 className='text-xl p-2'>My Work</h2>
                        <p className='text-xs text-left p-2'>
                            Check out the latest project, as well as technical information on the technological stack that powers it. It may give you an idea of what you want me to
                            make for you.
                        </p>
                        <Link href='/project' className='block text-right mx-2'>
                            <span className='border-b pb-2 text-xs nav-hover'>
                                Learn More <Sprite id='arrow-forward' />
                            </span>
                        </Link>
                    </div>
                </div>
            </div>
            <div className='row-span-1 grid grid-cols-1 place-items-end'>
                <div className='mt-2 mb-4 px-2 w-full'>
                    <hr className='w-full h-px my-2 border-0 bg-gray-700' />
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
