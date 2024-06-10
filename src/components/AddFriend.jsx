import axios from 'axios'
import React, { useState } from 'react'
import Nav from './Nav'

const AddFriend = () => {
 const[data,setData]=useState(
    {
       
        "name": "",
        "friendName": "",
        "friendNickName": "",
        "DescribeYourFriend": ""
    }
 )
 const inputHandler=(events)=>
    {
        setData({...data,[events.target.name]:events.target.value})
    }
    const readValue=()=>
        {
            console.log(data)
            axios.post("https://friendsapi-re5a.onrender.com/adddata",data).then(
              (response)=>{
                console.log(response.data)
                if(response.data.status=="success"){
                    alert("successfull")
                }else{
                    alert("error")

                }
              }  
            ).catch()
        }
    return (
    <div>
        <Nav/>
        <h1><center>ADD FRIEND</center></h1>
        <div className="container">

            <div className="row g-3">
                <div className="col col-12 col-sm-6 col-md-6">
                    <label htmlFor="" className="form-label">name</label>
                    <input type="text" className="form-control" name='name' value={data.name} onChange={inputHandler} />
                </div>
                <div className="col col-12 col-sm-6 col-md-6">
                <label htmlFor="" className="form-label">friendname</label>
                <input type="text" className="form-control" name='friendName' value={data.friendName} onChange={inputHandler} />
                </div>
                <div className="col col-12 col-sm-6 col-md-6">
                <label htmlFor="" className="form-label">friendnickname</label>
                <input type="text" className="form-control" name='friendNickName' value={data.friendNickName} onChange={inputHandler}/>
                </div>
                <div className="col col-12 col-sm-12 col-md-12">
                <label htmlFor="" className="form-label">description</label>
                <textarea name="DescribeYourFriend" id="" className="form-control" value={data.DescribeYourFriend} onChange={inputHandler} ></textarea>
                </div>
                <div className="col col-12 col-sm-6 col-md-6">
                    <button className="btn btn-success" onClick={readValue}>submit</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AddFriend