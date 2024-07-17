import React from 'react';
import { Link } from "react-router-dom";
const SaloonRegister = () => {
  return (
    <div>
       <form style={{marginTop:'3rem',marginLeft:'25rem',marginRight:'25rem',marginBottom:'1rem'}}>
        <h2 style={{display:'flex',justifyContent:'center',marginBottom:'1rem'}}>Register as a Saloon </h2>
      <div className="mb-3">
    <label for="exampleInputEmail1" className="form-label">Name</label>
    <input type="name" className="form-control" id="exampleInputname" aria-describedby="nameHelp"/>
  </div>      
  <div className="mb-3">
    <label for="exampleInputEmail1" className="form-label">Email address</label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div className="mb-3">
    <label for="exampleInputPassword1" className="form-label">Password</label>
    <input type="password" className="form-control" id="exampleInputPassword1"/>
  </div>
  <div className="mb-3">
    <label for="exampleInputEmail1" className="form-label">SaloonName</label>
    <input type="name" className="form-control" id="exampleInputname" aria-describedby="nameHelp"/>
  </div>   
  <div className="mb-3">
    <label for="exampleInputEmail1" className="form-label">Address</label>
    <input type="name" className="form-control" id="exampleInputname" aria-describedby="nameHelp"/>
  </div>  
  <div style={{display:'flex',flexWrap:'wrap',borderStyle:'solid',borderColor:'lightblue',marginTop:'1rem',marginBottom:'1rem'}}>
  <div className="mb-3" style={{marginLeft:'1rem'}}>
    <label for="exampleInputEmail1" className="form-label" >Services</label>
    <input type="name" className="form-control" id="exampleInputname" aria-describedby="nameHelp"/>
  </div> 
  <div className="mb-3" style={{marginLeft:'1rem'}}>
    <label for="exampleInputEmail1" className="form-label">Price</label>
    <input type="name" className="form-control" id="exampleInputname" aria-describedby="nameHelp"/>
  </div> 
  <div className="mb-3" style={{marginLeft:'1rem'}}>
    <label for="exampleInputEmail1" className="form-label">Time in minutes</label>
    <input type="name" className="form-control" id="exampleInputname" aria-describedby="nameHelp"/>
  </div> 
  <button type="button" class="btn btn-primary" style={{ marginLeft:'1rem',width:'10rem',maxHeight:'2.3rem',marginTop:'2rem'}}>Add More Services</button>
  </div>
  <Link to="/saloonLogin" className="btn btn-primary " >Register</Link>
 
</form>
<div style={{marginBottom:'2rem'}}>
<Link to="/saloonLogin" style={{marginLeft:'25rem',marginRight:'25rem',marginBottom:'5rem'}} >If you are already registered then Login!</Link>
</div>

    </div>
  );
}

export default SaloonRegister;
