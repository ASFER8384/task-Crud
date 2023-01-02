import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

export default function EditCom() {
    const [dts,setdts]=useState(null)
    const {id}=useParams()

    useEffect(()=>{
        fetch(`https://639b20c6d5141501974c2da2.mockapi.io/crud/${id}`)
        .then((dt)=>dt.json()).then((dts)=>setdts(dts))
    },[])
    
  return (dts ? <Details dts={dts}/> : "Loading" )
}


function Details({dts}){
    const [Fname,setFname]=useState(dts.Firstname)
    const [Lname,setLname]=useState(dts.Lastname)
    const [Age,setAge]=useState(dts.Age)
    // const [Check,setCheck]=useState(dts.check)
    // console.log(Check)
    const navigate=useNavigate()
    // console.log(dts)
    return(
        <div>
        <div>
    <div className="create">
      <input value={Fname} onChange={(event)=>setFname(event.target.value)} className='inp' type="text" placeholder='Enter First Name' />
      <input value={Lname} onChange={(event)=>setLname(event.target.value)} className='inp' type="text" placeholder='Enter Last Name'  />
      <input value={Age} onChange={(event)=>setAge(event.target.value)} className='inp' type="text" placeholder='Enter Age' />
      <div>
      {/* <input value={Check} onChange={()=>setCheck(!Check)}  className='inp' type="checkbox"/>
      <label>Agree Terms And Condition</label> */}
      </div>
      <button  className='btn' onClick={()=>{
        const newdata={
          Firstname:Fname,
          Lastname:Lname,
          Age:Age,
          // check:Check,
        }
        console.log(newdata)
        fetch(`https://639b20c6d5141501974c2da2.mockapi.io/crud/${dts.id}`,{
          method:"PUT",
          body: JSON.stringify(newdata),
          headers: { "Content-Type": "application/json" },
        }).then(()=>navigate("/read"))
      }} className="sub">Save</button>
    </div>
  </div>
  </div>
    )
}