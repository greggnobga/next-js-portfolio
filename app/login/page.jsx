'use client';

export default function Login() {
  /** Submit hanndler. */
  function submitHandler(e) {
    e.preventDefault();
    console.log('Clicked submit.');
  }
  /** Return something. */
  return (
    <section className='p-2 flex min-h-screen flex-col gap-2'>
      <h1 className='p-2 font-thin uppercase text-sm'>
        <span className='text-green-400'>/</span> Login
      </h1>
      <div className='p-2 grid grid-cols-1'>
        <form onSubmit={submitHandler}>
          <div className='relative z-0 w-full mb-6 group'>
            <input
              type='email'
              name='email'
              id='email'
              className='block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-600 peer'
              placeholder=' '
              required
            />
            <label
              htmlFor='email'
              className='peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-green-600 peer-focus:dark:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'>
              Email address
            </label>
          </div>
          <div className='relative z-0 w-full mb-6 group'>
            <input
              type='password'
              name='password'
              id='password'
              className='block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-600 peer'
              placeholder=' '
              required
            />
            <label
              htmlFor='password'
              className='peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-green-600 peer-focus:dark:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'>
              Pasword
            </label>
          </div>
          <button
            type='submit'
            className='text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800'>
            Login
          </button>
        </form>
      </div>
    </section>
  );
}
