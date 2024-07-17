/** Components. */
import Projects from '../../components/projects';

export default async function ProjectList() {
    /** Return something. */
    return (
        <section className='p-2 flex flex-col min-h-screen gap-2'>
            <h1 className='p-2 font-thin uppercase text-sm scroll-page'>
                <span className='text-green-400'>/</span> Project
            </h1>
            <div className='p-2 grid grid-cols-1 sm:grid-cols-3 gap-2 scroll-page'>
                <Projects />
            </div>
        </section>
    );
}
