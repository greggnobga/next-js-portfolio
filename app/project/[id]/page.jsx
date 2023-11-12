export async function generateStaticParams() {
  return [{ id: '1' }, { id: '2' }, { id: '3' }, { id: '4' }, { id: '5' }, { id: '6' }];
}

export default function PojectDetails({ params }) {
  const { id } = params;

  return <section className='p-2 flex min-h-screen flex-col gap-2'>Project {id} detail page.</section>;
}
