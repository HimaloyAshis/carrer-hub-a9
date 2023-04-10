import React from 'react';

const JobCategory = ({ job }) => {
    // console.log(job)
    const { logo, title, vacancy } = job;
    return (

        <div className=' items-center border border-b-gray-500 bg-slate-300m p-2 mx-4 space-y-2'>
            <img className='bg-slate-500' src={logo} alt="" />
            <p>{title}</p>
            <p className='text-gray-400'>{vacancy} + job abilities</p>
        </div>

    );
};

export default JobCategory;