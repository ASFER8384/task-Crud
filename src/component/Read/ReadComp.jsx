import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import "./Read.css"

export default function ReadComp() {
  const [Detail,SetDetail]=useState([])
  const navigate =useNavigate()

const getData=()=>{
  fetch("https://639b20c6d5141501974c2da2.mockapi.io/crud",{
    method:"GET"
  }).then((data)=>data.json()).then((data2)=>SetDetail(data2))
}


useEffect(()=>{getData()},[])
  return (
    <div className='Read'>
      <table>
        <thead>
          <tr>
            <th>FirstName</th>
            <th>LastName</th>
            <th>Age</th>
            <th>Checked</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {Detail.map((data)=>(
             <tr key ={data.id}>
             <td>{data.Firstname}</td>
             <td>{data.Lastname}</td>
             <td>{data.Age}</td>
             <td>{data.check == true ? "yes" : "no"}</td>
             <td><button className='bt' onClick={()=>navigate(`/edit/${data.id}`)}>Edit</button></td>
             <td><button onClick={()=>{
              fetch(`https://639b20c6d5141501974c2da2.mockapi.io/crud/${data.id}`,{
                method:"DELETE",
              }).then(()=>getData())
             }} 
             className='bt'>Delete</button></td>
           </tr>
          ))}
        </tbody>
      </table>
      <button className='bt' onClick={()=>navigate("/")}>Back</button>
    </div>
  )
}//.then(()=>navigate("/create"))
