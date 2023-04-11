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
            
            {
                jobs.map(job=><AllSingleJob job={job} key={job.id}></AllSingleJob>)
            }
        </div>
    );
};

export default AppliedAllJob;

// className='' 
//         style={{
//             height: '180px', 
//             width: '100%',
//             backgroundSize: 'cover',
//             backgroundImage: `url(${vectorImg})`
//             }}