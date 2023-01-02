import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import "./Create.css"

export default function CreateComp() {
  const [checked,setchecked]=useState(false)
  const [Fname,setFname]=useState("")
  const [Lname,setLname]=useState("")
  const [Age,setAge]=useState("")
  const navigate=useNavigate()




  return (
    <div>
      <div className="create">
       
        <input onChange={(event)=>setFname(event.target.value)} className='inp' type="text" placeholder='Enter First Name' />
        <input onChange={(event)=>setLname(event.target.value)} className='inp' type="text" placeholder='Enter Last Name'  />
        <input onChange={(event)=>setAge(event.target.value)} className='inp' type="text" placeholder='Enter Age' />
        <div>
        <input checked={checked} onChange={()=>console.log(setchecked(!checked))} className='inp' type="checkbox"/>
        <label>Agree Terms And Condition</label>
        </div>
        <button className='btn' onClick={()=>{
          const newdata={
            Firstname:Fname,
            Lastname:Lname,
            Age:Age,
            check:checked,
          }
          console.log(newdata)
          fetch("https://639b20c6d5141501974c2da2.mockapi.io/crud",{
            method:"POST",
            body: JSON.stringify(newdata),
            headers: { "Content-Type": "application/json" },
          }).then(()=>navigate("/read"))
        }} className="sub">Submit</button>
      </div>
    </div>
  )
}
