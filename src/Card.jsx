import React, { useEffect, useState } from 'react'


const Card = () => {

const[generate, setGenerate]=useState("")    


const handleGenerate=()=>{
    fetch("https://randomuser.me/api/")
    .then((res)=>res.json())
    .then((data)=>setGenerate(data.results[0]))
}

useEffect(()=>{
    handleGenerate()
},[])

  return (
    <div className='text-center mt-5 bg-danger p-4 m-auto' style={{ width: '50vw', borderRadius:"2rem" }}>
        <img className='rounded-circle' style={{ width: '20vw'}} src={generate?.picture?.large} alt="" />
        <h6 className='mt-3'>I'm</h6>
        <h4>{generate?.name?.first} from {generate?.location?.city} </h4>

        <h5>Age: {generate?.dob?.age}</h5>
        <h6 style={{fontSize:"14px"}} className='text-muted'>e-mail: {generate?.email}</h6>
        <h3></h3>

        <button onClick={handleGenerate} className='btn btn-success' >Generate</button>
    </div>
  )
}

export default Card