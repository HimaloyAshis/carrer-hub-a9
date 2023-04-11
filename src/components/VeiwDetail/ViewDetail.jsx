import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';

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



    return (
        <div className='mx-8'>
            <h2 className='text-2xl font-bold text-center '>Job Details</h2>
            <div className='grid md:grid-cols-2 mt-8 mx-auto'>
                <div className='space-y-5'>
                    <p><span className='font-bold'>Job Description</span> : {details.job_Description}</p>
                    <p><span className='font-bold'>Job Responsibility</span> : {details.Job_Responsibility}</p>
                    <p><span className='font-bold'>Educational Requirements</span> :{details.Educational_Requirements} </p>
                    <p><span className='font-bold'>Experiences</span> : {details.Experiences}</p>
                </div>
                <div>

                </div>
            </div>
        </div>
    );
};

export default ViewDetail;