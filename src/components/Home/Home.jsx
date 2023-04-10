import React from 'react';
import { useLoaderData } from 'react-router-dom';
import JobCategory from '../JobCategory/JobCategory';
import FeatureJob from '../FeatureJob/FeatureJob';


const Home = () => {
    const jobs = useLoaderData()

    return (
        <div className=''>
            <div className='flex items-center justify-between pl-10 pr-10'>
                <div className='w-96'>
                    <h2 className='text-bold text-6xl '>One Step Closer To Your <span className='text-green-500'>Dream Job</span></h2>
                    <p>Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.</p>
                    <button className='btn mt-2'>Get Started</button>
                </div>
                <div>
                    <img className='object-cover rounded mt-3 h-96' src="https://images.unsplash.com/photo-1624561172888-ac93c696e10c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=389&q=80" alt="" />
                </div>
            </div>
            <div>

                <section className=' mt-20 items-center'>
                    <h2 className='text-3xl text-center font-bold'>Job Category List</h2>
                    <p className='text-xl text-center mt-8'>Explore thousands of job opportunities with all the information you need. Its your future</p>
                    <div className='grid md:grid-cols-4 mx-auto mt-16 gap-2 '>
                        {
                            jobs.map(job => <JobCategory job={job} key={job.id}></JobCategory>)
                        }
                    </div>
                </section>

            </div>
            <section className='mt-36'>
                <FeatureJob></FeatureJob>
            </section>

        </div>
    );
};

export default Home;