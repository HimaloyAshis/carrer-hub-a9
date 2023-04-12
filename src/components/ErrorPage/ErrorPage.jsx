import React from 'react';
import { Link, useRouteError } from 'react-router-dom';
import { FaceFrownIcon } from '@heroicons/react/24/solid'

const ErrorPage = () => {
    const { error, status } = useRouteError()
    console.log('error', error.message, status)
    return (
        <section className='flex items-center h-screen bg-gray-100 text-gray-900 p-16'>
            <div className='container flex flex-col items-center justify-center mx-5 my-8'>
                <FaceFrownIcon className='text-yellow-400 h-40 w-40'></FaceFrownIcon>
                <div className='max-w-md text-center'>
                    <h2 className='text-2xl md:text-3xl font-extrabold text-yellow-400'>
                        <span className='sr-only'>Error </span>
                        {status || 404}
                    </h2>
                    <p className='text-red-800 font-semibold mt-3 mb-3'>
                        {error?.message}
                    </p>
                    <p className='text-2xl md:text-3xl font-bold text-yellow-400 mb-6'>provide a valid URL</p>
                    <Link to={'/'} className='btn'>
                        Back to Home page
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default ErrorPage;