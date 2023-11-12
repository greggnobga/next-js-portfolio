/** Components. */
import Card from '../../components/card';

export default function ProjectList() {
  return (
    <section className='p-2 flex min-h-screen flex-col gap-2'>
      <h1 className='p-2 font-thin uppercase text-sm'>
        <span className='text-green-400'>/</span> Project
      </h1>
      <div className='p-2 grid grid-cols-1 sm:grid-cols-3 gap-2'>
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
          link='/project/2'
          description='A Laravel React Plus Tailwind application will track stock price changes and allow the user to manage portfolio holdings.'
          badge={['laravel', 'mysql', 'react', 'tailwind']}
        />
        <Card
          title='Portfolio Trade App'
          image='/images/trade.png'
          link='/project/3'
          description='A Laravel React Plus Tailwind application will track stock price changes and allow the user to manage portfolio holdings.'
          badge={['laravel', 'mysql', 'react', 'tailwind']}
        />

        <Card
          title='Portfolio Trade App'
          image='/images/trade.png'
          link='/project/4'
          description='A Laravel React Plus Tailwind application will track stock price changes and allow the user to manage portfolio holdings.'
          badge={['laravel', 'mysql', 'react', 'tailwind']}
        />

        <Card
          title='Portfolio Trade App'
          image='/images/trade.png'
          link='/project/5'
          description='A Laravel React Plus Tailwind application will track stock price changes and allow the user to manage portfolio holdings.'
          badge={['laravel', 'mysql', 'react', 'tailwind']}
        />

        <Card
          title='Portfolio Trade App'
          image='/images/trade.png'
          link='/project/6'
          description='A Laravel React Plus Tailwind application will track stock price changes and allow the user to manage portfolio holdings.'
          badge={['laravel', 'mysql', 'react', 'tailwind']}
        />
      </div>
    </section>
  );
}
