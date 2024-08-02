import React, { useState } from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useToast } from '@chakra-ui/react'; // Import useToast

const SaloonLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const toast = useToast(); // Initialize toast

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Hello");

    axios.post('http://localhost:3000/saloon/login', { email, password })
      .then(result => {
        console.log(result);
        if (result.data.message === "Logged in successfully") {
          console.log("Login Success");
          localStorage.setItem('auth', JSON.stringify(result.data.token)); 
          localStorage.setItem('saloon', JSON.stringify(result.data.saloon));  
          
          toast({
            title: "Login Successful",
            description: "You have logged in successfully.",
            status: "success",
            duration: 5000,
            isClosable: true,
          });

          navigate('/saloonHome');
        } else {
          toast({
            title: "Incorrect Password",
            description: "Please try again.",
            status: "error",
            duration: 5000,
            isClosable: true,
          });
        }
      })
      .catch(err => {
        toast({
          title: "Login Failed",
          description: "Incorrect Email or Password!",
          status: "error",
          duration: 5000,
          isClosable: true,
        });
        return;
      });
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-12 col-md-8 col-lg-6">
          <div className="border p-4" style={{ borderRadius: '10px' , backgroundColor:'beige'}}>
            <h2 className="text-center mb-4">Login as a Saloon</h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">Email</label>
                <input 
                  type="email" 
                  className="form-control" 
                  id="exampleInputEmail1" 
                  aria-describedby="emailHelp"
                  onChange={(event) => setEmail(event.target.value)}
                  required
                />
                <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
              </div>
              <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                <input 
                  type="password" 
                  className="form-control" 
                  id="exampleInputPassword1"
                  onChange={(event) => setPassword(event.target.value)}
                  required
                />
              </div>
              <button type="submit" className="btn btn-primary">Login</button>
            </form>
          </div>
          <div className="text-center mt-4">
            <Link to="/saloonRegister">
              If you are not registered then Register!
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SaloonLogin;
