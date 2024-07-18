import React, { useState } from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const SaloonLogin = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();


  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Hello");

    axios.post('http://localhost:3000/saloon/login', { email, password })
      .then(result => {
        console.log(result);
        if (result.data.message === "Logged in successfully") {
          console.log("Login Success");
          localStorage.setItem('auth', JSON.stringify(result.data.token)); 
          alert('Login successful!');
          navigate('/saloonHome');
        } else {
          alert('Incorrect password! Please try again.');
        }
      })
      .catch(err =>{
        alert('Incorrect Email or Password!');
        return
      });
  };

  return (
    <div>
    <div style={{marginTop:'3rem',marginLeft:'25rem',marginRight:'25rem',marginBottom:'1rem',borderStyle:'solid',borderColor:'ButtonShadow'}}>
         <h2 style={{display:'flex',justifyContent:'center',marginBottom:'1rem'}}>Login as a Saloon </h2>
         <form onSubmit={handleSubmit}>
        <div className="mb-3" style={{margin:'1rem'}}>
    <label for="exampleInputEmail1" className="form-label">Email</label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
    onChange={(event) => setEmail(event.target.value)}
    required/>
    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div className="mb-3" style={{margin:'1rem'}}>
    <label for="exampleInputPassword1" className="form-label">Password</label>
    <input type="password" className="form-control" id="exampleInputPassword1"
    onChange={(event) => setPassword(event.target.value)}
    required/>
  </div>
  <button type="submit" className="btn btn-primary" style={{margin:'1rem'}}>Login</button>
  </form>
    </div>
    <div style={{marginBottom:'2rem'}}>
    <Link to="/saloonRegister" style={{marginLeft:'25rem',marginRight:'25rem',marginBottom:'5rem'}} >If you are not  registered then Regiser!</Link>
    </div>
    </div>
  );
}

export default SaloonLogin;
