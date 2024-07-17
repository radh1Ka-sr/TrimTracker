import React from 'react';
import { Link } from "react-router-dom";

const UserLogin = () => {
  return (
    <div>
    <div style={{marginTop:'3rem',marginLeft:'25rem',marginRight:'25rem',marginBottom:'1rem'}}>
    <h2 style={{display:'flex',justifyContent:'center',marginBottom:'1rem'}}>Login as a Customer </h2>
      <div className="mb-3">
    <label for="exampleInputEmail1" className="form-label">Email address</label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div className="mb-3">
    <label for="exampleInputPassword1" className="form-label">Password</label>
    <input type="password" className="form-control" id="exampleInputPassword1"/>
  </div>
  <button type="submit" className="btn btn-primary">Login</button>
  </div>
  <div style={{marginBottom:'2rem'}}>
  <Link to="/userRegister" style={{marginLeft:'25rem',marginRight:'25rem',marginBottom:'5rem'}} >If you are not  registered then Regiser!</Link>
  </div>
    </div>
  );
}

export default UserLogin;
