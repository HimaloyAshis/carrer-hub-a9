import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import { addJobs } from '../../utilities/dataase';

const ViewDetail = () => {

    const { DetailId } = useParams()
    const [details, setDetail] = useState({})
    const detailId = DetailId

    



    useEffect(() => {
        fetch('/featureJobs.json')
            .then(res => res.json())
            .then(data => {
                if (data) {
                    const viewId = data.find(dt => dt.id == detailId)
                    setDetail(viewId)
                    console.log(data)
                }
            })

    }, [])

    const applyDb= id =>{
        addJobs(id)
    }


    return (
        <div className='mx-8'>
            <h2 className='text-2xl font-bold text-center mt-6'>Job Details</h2>
            <div className='grid md:grid-cols-2 mt-8 mx-auto'>
                <div className='space-y-5 p-3'>
                    <p><span className='font-bold'>Job Description</span> : {details.job_Description}</p>
                    <p><span className='font-bold'>Job Responsibility</span> : {details.Job_Responsibility}</p>
                    <p><span className='font-bold'>Educational Requirements</span> :{details.Educational_Requirements} </p>
                    <p><span className='font-bold'>Experiences</span> : {details.Experiences}</p>
                </div>
                <div className='bg-slate-300 w-72 ml-16 rounded space-y-4 p-3'>
                    <h2 className=' font-bold text-2xl p-2 rounded'>Job Details</h2>
                    <hr className='bg-slate-500'/>
                    <div className='flex gap-2'>
                        <img src={details.salaryLogo} alt="" />
                        <p>{details.salary}</p>
                    </div>
                    <div className='flex gap-2'>
                        <img src={details.salaryLogo} alt="" />
                        <p>Job title : {details.jobTitle}</p>
                    </div>
                    <h2 className='text-2xl font-bold'>Contact Information</h2>
                    <div className='flex gap-2'>
                        <img src={details.phoneLogo} alt="" />
                        <p>{details.phone}</p>
                    </div>
                    <div className='flex gap-2'>
                        <img src={details.emailLogo} alt="" />
                        <p>{details.email}</p>
                    </div>
                    <div className='flex gap-2'>
                        <img src={details.locationLogo} alt="" />
                        <p>{details.location}</p>
                    </div>

                        <button onClick={()=>applyDb(details.id)} className='btn'>Apply Now</button>
                </div>
            </div>
        </div>
    );
};

export default ViewDetail;