import React, { useState } from 'react'
import { Link,useNavigate } from 'react-router-dom';


export default function Login() {
    const [credential, setcredential]= useState({email:"",password:""})
    let navigate = useNavigate()

   const handleSubmit=async(e)=>{
         e.preventDefault();
         const response = await fetch("http://localhost:5000/api/loginuser",{
           method:"POST",
           headers:{
             'Content-Type':'application/json'
           },
           body:JSON.stringify({email: credential.email,password: credential.password})
         })
         const json =await response.json()
         console.log(json);
 
         if(!json.success){
           alert("enter valid credential")
         }
         if(json.success){
          localStorage.setItem("userEmail",credential.email);
          localStorage.setItem("authToken",json.authToken);
          
          navigate('/')

        }

   }
   
  const onchange=(event)=>{
    setcredential({...credential,[event.target.name]:event.target.value})
  }
 
  return (
    <>
      <div className="container">
      <form onSubmit={handleSubmit}>
        
        
        <div className="m-3">
          <label htmlFor="exampleInputEmail1">Email address</label>
          <input
            type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Email" name="email" value={credential.email} onChange={onchange}
          />
          <small id="emailHelp" className="form-text text-muted">  We'll never share your email with anyone else. </small>
        </div>
        <div className="m-3">
          <label htmlFor="exampleInputPassword1">Password</label>
          <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Enter Password" name="password" value={credential.password} onChange={onchange}
          />
        </div>
        
        <button type="submit" className="m-3 btn btn-success">
          Submit
        </button>
        <Link to='/createuser' className="form-group btn btn-danger">I am a NewUser</Link>
        
      </form>
      </div>
      
    </>
  )
}
