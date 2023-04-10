import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Feature from '../Featur/Feature';

const FeatureJob = () => {
    const [features, setFeatures] = useState([])
    // console.log(features)

    useEffect(() => {
        fetch('featureJobs.json')
            .then(res => res.json())
            .then(data => setFeatures(data))
    }, [])
    return (
        <div>
            <div>
                <h2 className='text-center text-3xl font-bold'>Featured Jobs</h2>
                <p className='text-center text-xl'>Explore thousands of job opportunities with all the information you need. Its your future</p>

                <div className='grid md:grid-cols-2  gap-10'>
                    {
                        features.map(feature => <Feature feature={feature} key={feature.logo}></Feature>)
                    }
                </div>
            </div>
        </div>
    );
};

export default FeatureJob;