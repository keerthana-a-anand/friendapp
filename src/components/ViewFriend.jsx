import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Nav from './Nav'

const ViewFriend = () => {
    const[data,setData]=useState([])
    const fetchData=()=>{
    axios.get("http://localhost:8080/view").then(
        (response)=>
            {
                setData(response.data)
            }
    )}
    useEffect(()=>{fetchData()},[])
  return (
    <div>
        <Nav/>
        <table class="table">
  <thead>
    <tr>
      <th scope="col">name</th>
      <th scope="col">rollno
      </th>
      <th scope="col">admno</th>
      <th scope="col">college</th>
    </tr>
  </thead>
  <tbody>
   {data.map(
    (value,index)=>
        {
            return  <tr>
            <th scope="row">{value.name}</th>
            <td>{value.rollno}</td>
            <td>{value.admno}</td>
            <td>{value.college}</td>
          </tr>
        }
   )}
  
  </tbody>
</table>
    </div>
  )
}

export default ViewFriend