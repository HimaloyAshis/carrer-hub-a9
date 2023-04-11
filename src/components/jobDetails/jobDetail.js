import { addJobs, getJobDb } from "../../utilities/dataase"

const jobDetail= async ()=>{
    const loadJob = await fetch('/featureJobs.json')
    const jobs = await loadJob.json()
    
    const storeJob = getJobDb()
    const saveJob = []

    for(const id in storeJob){
        const singleJob = jobs.find(job=>job.id==id)
        if(singleJob){
            const quantity = storeJob[id]
            singleJob[id] = quantity
            saveJob.push(singleJob)
        }
    }

    return saveJob
}

export {jobDetail}