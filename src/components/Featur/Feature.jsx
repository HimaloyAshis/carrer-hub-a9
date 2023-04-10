import React, { useEffect, useState } from 'react';

const Feature = ({ feature }) => {
    console.log(feature)
    const { companyLogo, id, companyName, fullTime, jobTitle, location, locationLogo, remote, salary, salaryLogo } = feature
    return (
        <div className='mx-auto mt-10 space-y-5 bg-slate-200 p-4 rounded'>
            <div className='h-10 w-14'>
                <img  src={companyLogo} alt="logo" />
            </div>
            <p>{jobTitle}</p>
            <p>{companyName}</p>
            <p>{fullTime}</p>
            <div className='flex gap-5'>
                <div className='flex'>
                    <img src={locationLogo} alt="" />
                    <p>{location}</p>
                </div>
                <div className='flex'>
                    <img src={salaryLogo} alt="" />
                    <p>{salary}</p>
                </div>
            </div>
            <button className='btn'>View Detail</button>
        </div>
    );
};

export default Feature;