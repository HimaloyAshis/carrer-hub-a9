import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Feature = ({ feature }) => {
    // console.log(feature)
    const { companyLogo, id, companyName, fullTime, jobTitle, location, locationLogo, remote, salary, salaryLogo } = feature
    // console.log(id)
    
    return (
        <div className='mx-auto mt-10 space-y-5 bg-slate-200 p-4 rounded space-y-3'>

            <img className='h-10 w-20' src={companyLogo} alt="logo" />

            <p>{jobTitle}</p>
            <p>{companyName}</p>
            <div className='flex gap-2'>
                <button className='btnTime'>{fullTime}</button>
                <button className='btnTime'>{remote}</button>
            </div>
        
            <div className='flex gap-5 '>
                <div className='flex'>
                    <img src={locationLogo} alt="" />
                    <p>{location}</p>
                </div>
                <div className='flex'>
                    <img src={salaryLogo} alt="" />
                    <p>{salary}</p>
                </div>
            </div>
            <Link to={`/viewDetail/${id}`}><button className='btn ' >View Detail </button></Link>
        </div>
    );
};

export default Feature;