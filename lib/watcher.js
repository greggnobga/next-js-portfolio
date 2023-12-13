/** Library. */
import { verifyToken } from './token';

/** Declare async function. */
const Watcher = async (request) => {
    /** Get cookie in the jar. */
    const token = request.cookies.get('token')?.value;

    /** Check and verify token. */
    const verified =
        token &&
        (await verifyToken(token).catch((error) => {
            console.log(error);
        }));

    /** Return something. */
    return { token, verified };
};

/** Export function. */
export default Watcher;
