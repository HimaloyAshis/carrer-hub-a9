import React from 'react';
import { useLoaderData } from 'react-router-dom';

const FeatureJob = () => {
    const features = useLoaderData()
    console.log(features)
    return (
        <div>
            <div>
                <h2 className='text-center text-3xl font-bold'>Featured Jobs</h2>
                <p className='text-center text-xl'>Explore thousands of job opportunities with all the information you need. Its your future</p>
                

            </div>
        </div>
    );
};

export default FeatureJob;