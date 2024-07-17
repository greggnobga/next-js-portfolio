/** Components. */
import Sprite from '../../components/ui/sprite';

export default function About() {
    return (
        <section className='p-2 flex flex-col flex-wrap min-h-screen'>
            <h1 className='p-2 font-thin uppercase text-sm'>
                <span className='text-green-400'>/</span> About
            </h1>
            <div className='p-2 grid place-items-center w-full'>
                <div className='p-4'>
                    <img className='w-52 h-52 border shadow rounded-full' src='/images/about.png' alt='Orion' />
                </div>
                <div className='p-4 flex flex-wrap flex-col sm:flex-row scroll-page'>
                    <span className='block text-xs p-2'>
                        <a href='mailto:gnbrph@gmail.com'>
                            <Sprite id='mail' /> reijonobga@gmail.com
                        </a>
                    </span>
                    <span className='block text-xs p-2'>
                        <Sprite id='contact' /> 09951335416
                    </span>
                    <span className='block text-xs p-2'>
                        <a href='http://buntod.com/'>
                            <Sprite id='website' /> https://buntod.com/
                        </a>
                    </span>
                </div>
                <hr className='w-64 h-px my-2 border-0 bg-gray-700 scroll-page' />
                <div className='p-4 text-left text-xs'>
                    <p className='py-2'>
                        Reijo, a web developer adept in current frameworks, delivers a dynamic blend of creativity and technical expertise to each project. Reijo specializes at
                        creating immersive and user friendly web experiences, thanks to a strong foundation in languages such as HTML, CSS, and JAVASCRIPT, as well as knowledge of
                        cutting edge frameworks like as React, Next, and Laravel.
                    </p>
                </div>
                <div className='p-4 w-full grid grid-cols-1 sm:grid-cols-3'>
                    <div className='py-2'>
                        <h3 className='py-2 font-thin uppercase text-sm'>
                            <span className='text-green-400'>/</span> Education
                        </h3>
                        <p className='py-1 text-xs scroll-page'>Bachelor of Science in Information Technology</p>
                        <p className='py-1 text-xs scroll-page'>Saint Columban College</p>
                        <p className='py-1 text-xs scroll-page'>2009</p>
                    </div>

                    <div className='py-2'>
                        <h3 className='py-2 font-thin uppercase text-sm'>
                            <span className='text-green-400'>/</span> Technical Skills
                        </h3>
                        <div className='w-11/12 flex justify-between mb-1 scroll-page'>
                            <span className='text-xs text-slate-300'>Docker</span>
                            <span className='text-xs text-slate-300'>50%</span>
                        </div>
                        <div className='w-11/12 rounded-full h-1.5 mb-4 bg-gray-700'>
                            <div className='h-1.5 rounded-full bg-gray-300' style={{ width: '50%' }}></div>
                        </div>
                        <div className='w-11/12 flex justify-between mb-1 scroll-page'>
                            <span className='text-xs text-slate-300'>Laravel</span>
                            <span className='text-xs text-slate-300'>80%</span>
                        </div>
                        <div className='w-11/12 rounded-full h-1.5 mb-4 bg-gray-700'>
                            <div className='h-1.5 rounded-full bg-gray-300' style={{ width: '80%' }}></div>
                        </div>
                        <div className='w-11/12 flex justify-between mb-1 scroll-page'>
                            <span className='text-xs text-slate-300'>Next JS</span>
                            <span className='text-xs text-slate-300'>65%</span>
                        </div>
                        <div className='w-11/12 rounded-full h-1.5 mb-4 bg-gray-700'>
                            <div className='h-1.5 rounded-full bg-gray-300' style={{ width: '65%' }}></div>
                        </div>
                    </div>
                    <div className='py-2'>
                        <h3 className='py-2 font-thin uppercase text-sm scroll-page'>
                            <span className='text-green-400'>/</span> Interest
                        </h3>
                        <p className='py-2 text-xs scroll-page'>
                            <Sprite id='arrow-forward' /> Web Development
                        </p>
                        <p className='py-2 text-xs scroll-page'>
                            <Sprite id='arrow-forward' /> Low Powered Servers
                        </p>
                        <p className='py-2 text-xs scroll-page'>
                            <Sprite id='arrow-forward' /> Trading
                        </p>
                        <p className='py-2 text-xs scroll-page'>
                            <Sprite id='arrow-forward' /> Light Novels
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
