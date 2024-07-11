/** Vendor. */
import Link from 'next/link';
import Image from 'next/image';

export default function Card({ name, image, description, tags, permalink }) {
    /** Split tags into array */
    const badge = tags ? tags.split(' ') : [];

    /** Return something. */
    return (
        <Link href={`project/${permalink}`} className='flex flex-col items-center rounded-lg shadow border border-gray-700 bg-gray-800 hover:bg-gray-700'>
            <Image className='object-cover object-top w-full h-48 rounded-t-lg' src={image} width={750} height={750} alt={name} />
            <div className='flex flex-col justify-between p-4 leading-normal items-stretch h-full'>
                <h5 className='mb-2 text-sm font-bold tracking-tight  text-white'>{name}</h5>
                <p className='mb-3 text-xs font-normal text-left  text-gray-400'>{description?.substring(0, 100) + '...'}</p>
            </div>
            {badge && (
                <div className='p-2 tex-xs w-full h-auto flex flex-row flex-wrap gap-2 place-content-end'>
                    {badge.map((item, id) => {
                        return (
                            <span key={id} className='text-xs font-medium me-1 px-2.5 py-0.5 rounded-sm bg-gray-700 text-gray-400 border border-gray-500'>
                                {item}
                            </span>
                        );
                    })}
                </div>
            )}
        </Link>
    );
}
