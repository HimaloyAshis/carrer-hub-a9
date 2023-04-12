import React from 'react';
import './AllSingleJob.css'
import { Link } from 'react-router-dom';

const AllSingleJob = ({ job }) => {
    console.log(job)
    const { companyLogo, jobTitle, companyName,fullTime, remote, locationLogo, location, salary, salaryLogo } = job
    return (
        <div className='space-y-3 md:flex items-center mx-6 mt-6'>

            <div className='w-72 bg-slate-200 p-8 border rounded'>
                <img src={companyLogo} alt="" />
            </div>
            <div className=' grw ml-6 space-y-1'>
                <p>{jobTitle}</p>
                <p>{companyName}</p>
                <div className='md:flex gap-3'>
                    <button className='btnTime'>{fullTime}</button>
                    <button className='btnTime'>{remote}</button>
                </div>
                <div className='md:flex gap-4'>
                    <div className='flex gap-2'>
                        <img src={locationLogo} alt="" />
                        <p>{location}</p>
                    </div>
                    <div className='flex gap-2'>
                        <img src={salaryLogo} alt="" />
                        <p>{salary}</p>
                    </div>
                </div>
            </div>
            <Link to={'/'}><button className='btn'>View Detail</button></Link>
        </div>
    );
};

export default AllSingleJob;