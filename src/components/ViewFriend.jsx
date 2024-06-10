import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Nav from './Nav'

const ViewFriend = () => {
    const[data,setData]=useState([])
    const fetchData=()=>{
    axios.get(" https://friendsapi-re5a.onrender.com/view").then(
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
      <th scope="col">friendname
      </th>
      <th scope="col">nickname</th>
      <th scope="col">description</th>
    </tr>
  </thead>
  <tbody>
   {data.map(
    (value,index)=>
        {
            return  <tr>
            <th scope="row">{value.name}</th>
            <td>{value.friendName}</td>
            <td>{value.friendNickName}</td>
            <td>{value.DescribeYourFriend}</td>
          </tr>
        }
   )}
  
  </tbody>
</table>
    </div>
  )
}

export default ViewFriend