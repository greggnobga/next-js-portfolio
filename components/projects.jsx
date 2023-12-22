'use client';

/** React. */
import { useEffect } from 'react';

/** Vendor. */
import { useSelector, useDispatch } from 'react-redux';

/** Action. */
import { listProject } from '../redux/actions/project-actions';

/** Component.  */
import Loader from './ui/loader';
import Card from './ui/card';

export default function Projects() {
    /** Use selector. */
    const projectList = useSelector((state) => state.projectList);
    const { loading, projects } = projectList;

    /** Use dispatch. */
    const dispatch = useDispatch();

    /** Use effect. */
    useEffect(() => {
        if (!projects) {
            /** Fetch featured projects. */
            dispatch(listProject());
        }
    }, [dispatch, projects]);

    /** Return something. */
    return projects ? (
        projects.map((item, id) => {
            return <Card key={id} name={item.name} image={item.image} description={item.description} tags={item.tags} permalink={item.permalink} demo={item.demo} />;
        })
    ) : loading ? (
        <Loader />
    ) : (
        <p className='text-xs'>Loading projects...</p>
    );
}
