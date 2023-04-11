const addJobs = id =>{
  const jobDb = getJobDb()
  const quantity = jobDb[id]
  if(!quantity){
        jobDb[id] = 1
  }
  else{
    const newQuantity = quantity + 1
    jobDb[id] =newQuantity
  }
  localStorage.setItem('jobs', JSON.stringify(jobDb))
}



const getJobDb= () =>{
    let jobDb= {}
    const storeJobs = localStorage.getItem('jobs')
    if(storeJobs){
        jobDb = JSON.parse(storeJobs)
    }
    return jobDb
}

export {addJobs,getJobDb}