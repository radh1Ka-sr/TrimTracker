import React, { useState } from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useToast } from '@chakra-ui/react'; // Imported useToast

const UserLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const toast = useToast();

  const handleSubmit = (event) => {
    event.preventDefault();

    axios.post('http://localhost:3000/user/login', { email, password })
      .then(result => {
        console.log(result);
        if (result.data.message === "Logged in successfully") {
          console.log("Login Success");
          localStorage.setItem('auth', JSON.stringify(result.data.token));
          localStorage.setItem('user', JSON.stringify(result.data.user));  
          
          // Show toast notification
          toast({
            title: "Login Successful",
            description: "The user has logged in successfully.",
            status: "success",
            duration: 3000,
            isClosable: true,
          });
          
          navigate('/userHome');
        } else {
          toast({
            title: "Incorrect password",
            description: "Please try again.",
            status: "error",
            duration: 3000,
            isClosable: true,
          });
        }
      })
      .catch(err => {
        toast({
          title: "Login Failed",
          description: "Incorrect Email or Password.",
          status: "error",
          duration: 3000,
          isClosable: true,
        });
        console.error(err);
      });
  };

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-12 col-md-8 col-lg-6">
          <div className="border p-4 mt-4"  style={{backgroundColor:'beige'}}>
            <h2 className="text-center mb-4">Login as a Customer</h2>
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
              <button type="submit" className="btn btn-primary w-100">Login</button>
            </form>
          </div>
          <div className="text-center mt-3">
            <Link to="/userRegister">If you are not registered then Register!</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserLogin;
