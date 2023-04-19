import React, { useState } from "react";
import { Link } from "react-router-dom";


export const Signup = () => {
   const [credentials, setcredentials]= useState({name:"",email:"",password:"",geolocation:""})
  const handleSubmit=async(e)=>{
        e.preventDefault();
        const response = await fetch("http://localhost:5000/api/createuser",{
          method:"POST",
          headers: {
            'Content-Type':'application/json'
          },
          body:JSON.stringify({name:credentials.name,email:credentials.email,password:credentials.password,location:credentials.geolocation})
        })
        const json =await response.json()
        alert('Successfully Registered')

        if(!json.success){
          alert("enter valid credentials")
        }

  }
  
 const onchange=(event)=>{
  setcredentials({...credentials,[event.target.name]:event.target.value})
 }

  return (
    <div class='background'>
      <div className="container" class='design'>
      <form onSubmit={handleSubmit}>
        
        <div className="m-3">
          <label htmlFor="name" className="form-label">Name</label>
          <input type="text" className="form-control" placeholder="Enter Name" name="name" value={credentials.name} onChange={onchange}/>
        </div>
        <div className="m-3">
          <label htmlFor="exampleInputEmail1">Email address</label>
          <input
            type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Email" name="email" value={credentials.email} onChange={onchange}
          />
          <small id="emailHelp" className="form-text text-muted">  We'll never share your email with anyone else. </small>
        </div>
        <div className="m-3">
          <label htmlFor="exampleInputPassword1">Password</label>
          <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Enter Password" name="password" value={credentials.password} onChange={onchange}
          />
        </div>
        <div className="m-3">
          <label htmlFor="exampleInputAddress1">Address</label>
          <input
            type="text" name="geolocation" className="form-control" id="exampleInputAddress1" placeholder="address" value={credentials.geolocation} onChange={onchange}
          />
        </div>

        <button type="submit" className="m-3 btn btn-success">
          Submit
        </button>
        <Link to='/login' className="form-group btn btn-danger">Already a user</Link>
        
      </form>
      </div>
    </div>
  );
};
