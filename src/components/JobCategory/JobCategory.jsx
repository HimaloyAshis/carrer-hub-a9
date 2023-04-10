import React from 'react';

const JobCategory = ({ job }) => {
    console.log(job)
    const { logo, title, vacancy } = job;
    return (

        <div className='grid-cols-4'>
            <img className='bg-slate-500' src={logo} alt="" />
            <p>{title}</p>
            <p>{vacancy}</p>
        </div>

    );
};

export default JobCategory;