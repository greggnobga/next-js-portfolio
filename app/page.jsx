/** Vendor. */
import Link from 'next/link';

/** Components. */
import Sprite from '../components/ui/sprite';
import Hero from '../components/ui/hero';
import Featured from '../components/featured';

/** Force build to dynamic. */
export const dynamic = 'force-dynamic';

export default async function Home() {
    /** Return something. */
    return (
        <section className='p-2 flex flex-col min-h-screen gap-2'>
            <Hero />
            <div className='grid grid-cols-1 sm:grid-cols-2 place-items-center bg-slate-800 bg-opacity-20 w-full h-fit sm:h-[75vh]'>
                <div className='p-2'>
                    <h3 className='p-2 font-thin uppercase text-sm'>
                        <span className='text-green-400'>/</span> About Me
                    </h3>
                    <h1 className='p-2 text-3xl'>I have been developing websites since 2024</h1>
                    <p className='p-2 text-xs text-justify'>
                        After gaining essential experience and abilities in creating dynamic, high performance web applications, Initially focusing on the fundamentals, I quickly
                        acquired HTML, CSS, and JAVASCRIPT before diving into current frameworks for creating interesting and efficient user experiences.
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
                            <span className='text-3xl'>01</span> <span className='text-xs'>Years of experience</span>
                        </div>
                        <div className='w-32 sm:w-48 text-center'>
                            <span className='text-3xl'>04</span> <span className='text-xs'>Successful projects</span>
                        </div>
                    </div>
                    <div className='p-2'>
                        <p className='p-2 text-xs text-justify'>
                            Reijo completed a successful web development project for a very delighted client, which was a key milestone in his career. He began by working closely
                            with the client to understand their vision, requirements, and business goals.
                        </p>
                    </div>
                </div>
            </div>

            <div className='grid grid-cols-1 place-items-start bg-slate-700 bg-opacity-20 w-full h-[50vh]'>
                <div className='p-0'>
                    <h3 className='p-2 font-thin uppercase text-sm'>
                        <span className='text-green-400'>/</span> Dev Stack
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
                            <Sprite id='arrow-forward' /> Nginx
                        </p>
                        <p className='px-2 py-2'>
                            <Sprite id='arrow-forward' /> Apache
                        </p>
                    </div>
                    <div className='p-1 text-xs sm:p-2 sm:text-sm'>
                        <h2 className='text-sm font-thin'>Backend</h2>
                        <hr className='w-24 h-px my-1 bg-gray-200 border-0 dark:bg-gray-700' />
                        <p className='px-2 py-2'>
                            <Sprite id='arrow-forward' /> Laravel
                        </p>
                        <p className='px-2 py-2'>
                            <Sprite id='arrow-forward' /> Django
                        </p>
                        <p className='px-2 py-2'>
                            <Sprite id='arrow-forward' /> Node
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
                <div className='grid grid-cols-1 gap-2 sm:grid-cols-3 place-items-center w-full'>
                    <Featured />
                </div>
            </div>
        </section>
    );
}
