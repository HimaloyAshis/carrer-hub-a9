import React from 'react';
import { useLoaderData } from 'react-router-dom';
import vectorImg from '../../../public/All Images/Vector-1.png'
import AllSingleJob from '../AllSingleJob/AllSingleJob';

const AppliedAllJob = () => {
    const jobs = useLoaderData()
    // console.log(jobs.Experiences)
    // const {} = jobs
    return (
        <div >
            <h1 className='bg-slate-400 p-12 text-center font-bold text-3xl'>Here is all applied jobs</h1>
            {
                jobs.map(job=><AllSingleJob job={job} key={job.id}></AllSingleJob>)
            }
        </div>
    );
};

export default AppliedAllJob;

