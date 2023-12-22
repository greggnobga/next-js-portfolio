'use client';

/** React. */
import { useEffect } from 'react';

/** Vendor. */
import { useSelector, useDispatch } from 'react-redux';

/** Action. */
import { featuredProject } from '../redux/actions/project-actions';

/** Component.  */
import Loader from './ui/loader';
import Card from './ui/card';

export default function Featured() {
    /** Use selector. */
    const projectFeatured = useSelector((state) => state.projectFeatured);
    const { loading, featured } = projectFeatured;

    /** Use dispatch. */
    const dispatch = useDispatch();

    /** Use effect. */
    useEffect(() => {
        if (!featured) {
            /** Fetch featured projects. */
            dispatch(featuredProject());
        }
    }, [dispatch, featured]);

    /** Return something. */
    return featured ? (
        featured.map((item, id) => {
            return <Card key={id} name={item.name} image={item.image} description={item.description} tags={item.tags} permalink={item.permalink} demo={item.demo} />;
        })
    ) : loading ? (
        <Loader />
    ) : (
        <p className='text-xs'>Loading featured projects...</p>
    );
}
