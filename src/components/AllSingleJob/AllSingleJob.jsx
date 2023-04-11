import React from 'react';

const AllSingleJob = ({job}) => {
    console.log(job)
    const {companyLogo,jobTitle,companyName,locationLogo,location,salary,salaryLogo} = job
    return (
        <div className='space-y-3 flex  items-center'>
            <div className='w-24 h-16'>
                <img src={companyLogo} alt="" />
            </div>
            <div className=' flex-grow-0 space-y-3'>
                <p>{jobTitle}</p>
                <p>{companyName}</p>
                <div className='flex gap-2'>
                    <img src={locationLogo} alt="" />
                    <p>{location}</p>
                </div>
                <div className='flex gap-2'>
                    <img src={salaryLogo} alt="" />
                    <p>{salary}</p>
                </div>
            </div>
            <button className='btn'>View Detail</button>
        </div>
    );
};

export default AllSingleJob;