/** Vendor. */
import { SignJWT, jwtVerify } from 'jose';

/** Get JWT secret. */
export const getJWTSecret = () => {
    /** Get environment variable. */
    const secret = process.env.JWT_SECRET;

    /** Check if jwt secret is define. */
    if (!secret || secret.length === 0) {
        throw new Error('The enviroment variable JWT_SECRET is not set.');
    }
    /** Return something. */
    return secret;
};

/** Generate token. */
const generateToken = async ({ id, admin }) => {
    /** Return generated token. */
    return await new SignJWT({ id, admin })
        .setProtectedHeader({ alg: 'HS256' })
        .setIssuedAt()
        .setExpirationTime(process.env.JWT_EXPIRATION_TIME)
        .sign(new TextEncoder().encode(getJWTSecret()));
};

/** Verify token. */
const verifyToken = async (token) => {
    /** Try block. */
    try {
        /** Run jwt verify. */
        const verified = await jwtVerify(token, new TextEncoder().encode(getJWTSecret()));

        /** Return something. */
        return verified.payload;
    } catch (error) {
        /** Catch block. */
        throw new Error('Your token has expired.');
    }
};

export { generateToken, verifyToken };
