/** Next. */
import Link from 'next/link';

export default function Card({ name, image, description, tags, demo }) {
  /** Split tags into array */
  const badge = tags ? tags.split(' ') : [];

  /** Return something. */
  return (
    <Link
      href={demo}
      className='flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700'>
      <img className='object-cover object-top w-full h-48 sm:64 rounded-t-lg' src={image} alt='' />
      <div className='flex flex-col justify-between p-4 leading-normal'>
        <h5 className='mb-2 text-sm font-bold tracking-tight text-gray-900 dark:text-white'>{name}</h5>
        <p className='mb-3 text-xs font-normal text-gray-700 dark:text-gray-400'>{description?.substring(0, 200)}</p>
      </div>
      {badge && (
        <div className='p-2 tex-xs w-full h-auto flex flex-row flex-wrap gap-2 place-content-end'>
          {badge.map((item, id) => {
            return (
              <span
                key={id}
                className='bg-gray-100 text-gray-800 text-xs font-medium me-1 px-2.5 py-0.5 rounded-sm dark:bg-gray-700 dark:text-gray-400 border border-gray-500'>
                {item}
              </span>
            );
          })}
        </div>
      )}
    </Link>
  );
}
