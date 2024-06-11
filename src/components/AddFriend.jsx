import axios from 'axios'
import React, { useState } from 'react'
import Nav from './Nav'

const AddFriend = () => {
 const[data,setData]=useState(
    {
       
        "name": "",
        "rollno": "",
        "admno": "",
        "college": ""
    }
 )
 const inputHandler=(events)=>
    {
        setData({...data,[events.target.name]:events.target.value})
    }
    const readValue=()=>
        {
            console.log(data)
            axios.post("http://localhost:8080/add",data).then(
              (response)=>{
                console.log(response.data)
                if(response.data.status=="success"){
                    alert("successfull")
                }else{
                    alert("error")

                }
              }  
            ).catch().finally()
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
                <label htmlFor="" className="form-label">rollno</label>
                <input type="text" className="form-control" name='rollno' value={data.rollno} onChange={inputHandler} />
                </div>
                <div className="col col-12 col-sm-6 col-md-6">
                <label htmlFor="" className="form-label">admno</label>
                <input type="text" className="form-control" name='admno' value={data.admno} onChange={inputHandler}/>
                </div>
                <div className="col col-12 col-sm-12 col-md-12">
                <label htmlFor="" className="form-label">college</label>
                <input type="text" className="form-control" name='college' value={data.college} onChange={inputHandler}/>
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