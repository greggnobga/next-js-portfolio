/** Next. */
import Image from 'next/image';

/** Components. */
import Sprite from '../../../components/ui/sprite';

/** Get project details for server side rendering. */
export async function getDetails({ permalink }) {
    /** Get data from api. */
    const details = await fetch(`${process.env.HOST}/api/project/${permalink}`, { cache: 'no-store' }).then((data) => data.json());

    console.log();
    /** Return something. */
    return details ? details : {};
}

export async function generateMetadata({ params }) {
    /** Gert parametr value. */
    const { permalink } = await params;

    /** Get data from api. */
    const details = await fetch(`${process.env.HOST}/api/project/${permalink}`, { cache: 'no-store' }).then((data) => data.json());

    console.log(details);
    /** Return something. */
    return {
        title: `${details.name} | Freelance Full Stack Web Developer`,
        description: details.description,
        keywords: details.tags,
    };
}

/** Default export. */
export default async function PojectDetails({ params }) {
    /** Gert parametr value. */
    const { permalink } = await params;

    /** Featch project details. */
    const details = await getDetails({ permalink });

    /** Split tags. */
    const tags = details ? details.tags.split(' ') : [];

    /** Return something. */
    return (
        <section className='p-2 flex flex-col min-h-screen gap-2'>
            <div className='grid grid-cols-1 sm:grid-cols-2 place-content-start'>
                <div className='p-2'>
                    <Image className='object-cover object-top w-full h-fit' src={details.image} width={750} height={750} alt={details.name} />
                </div>
                <div className='p-2'>
                    <div className='flex flex-wrap justify-between'>
                        <h1 className=' text-green-400 uppercase scroll-page'>{details.name}</h1>
                        <a className='text-xs text-slate-300' href={details.demo} target='_blank'>
                            Live Demo
                        </a>
                    </div>
                    <hr className='w-full h-px my-2 border-0 bg-gray-700' />
                    <h3 className='py-2 font-thin text-sm uppercase scroll-page'>
                        <span className='text-green-400'>/</span> About this project
                    </h3>
                    <hr className='w-48 h-px my-2 border-0 bg-gray-700' />
                    <p className='py-2 text-slate-300 text-xs scroll-page'>{details.description}</p>
                    <h3 className='py-2 font-thin text-sm uppercase scroll-page'>
                        <span className='text-green-400'>/</span> Technical Sheet
                    </h3>
                    <hr className='w-48 h-px my-2 border-0 bg-gray-700' />
                    <p className='py-2 text-slate-300 text-xs scroll-page'>Built with the following list below:</p>
                    <ul className='py-2 text-slate-300 text-xs'>
                        {tags &&
                            tags.map((item, id) => {
                                return (
                                    <li key={id} className='py-2 uppercase scroll-page'>
                                        <Sprite id='arrow-forward' /> {item}
                                    </li>
                                );
                            })}
                    </ul>
                </div>
            </div>
        </section>
    );
}
