/** Components. */
import Card from '../../components/card';

async function getProjects() {
    /** Get data from api. */
    const data = await fetch(`${process.env.HOST}/api/project`, { cache: 'no-store' }).then((data) => data.json());

    /** Return something. */
    return data ? (
        data.map((item, id) => {
            return (
                <Card
                    key={id}
                    name={item.name}
                    image={item.image}
                    description={item.description}
                    tags={item.tags}
                    permalink={item.permalink}
                    demo={item.demo}
                />
            );
        })
    ) : (
        <p>No featured project so far.</p>
    );
}

export default async function ProjectList() {
    /** Get featured projects. */
    const projects = await getProjects();

    /** Return something. */
    return (
        <section className='p-2 flex flex-col min-h-screen gap-2'>
            <h1 className='p-2 font-thin uppercase text-sm'>
                <span className='text-green-400'>/</span> Project
            </h1>
            <div className='p-2 grid grid-cols-1 sm:grid-cols-3 gap-2'>{projects}</div>
        </section>
    );
}
