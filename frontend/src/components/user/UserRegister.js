import React, { useState } from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useToast } from '@chakra-ui/react'; // Imported useToast

const UserRegister = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phone, setPhone] = useState('');
  const [gender, setGender] = useState('');
  const [errors, setErrors] = useState({});

  const navigate = useNavigate();
  const toast = useToast();

  const validateForm = () => {
    const newErrors = {};

    if (!name) newErrors.name = 'Name is required';
    if (!email) newErrors.email = 'Email is required';
    if (!password) newErrors.password = 'Password is required';
    if (!phone) newErrors.phone = 'Phone number is required';
    if (!gender) newErrors.gender = 'Gender is required';

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!validateForm()) return;

    axios.post('http://localhost:3000/user/signup', { name, email, password, phone, gender })
      .then(response => {
        console.log(response.data);
        // Show toast notification
        toast({
          title: "Registration Successful",
          description: "The user has registered successfully.",
          status: "success",
          duration: 4000,
          isClosable: true,
        });
        navigate('/userLogin');
      })
      .catch(error => {
        if (error.response) {
          if (error.response.status === 403) {
            toast({
              title: "E-mail already registered",
              description: "Please Login to proceed.",
              status: "warning",
              duration: 4000,
              isClosable: true,
            });
            navigate('/userLogin');
          } else {
            toast({
              title: "An error occurred",
              description: "Please try again.",
              status: "error",
              duration: 4000,
              isClosable: true,
            });
          }
        } else {
          console.log(error);
          toast({
            title: "Network Error",
            description: "Please check your network connection and try again.",
            status: "error",
            duration: 5000,
            isClosable: true,
          });
        }
      });
  }

  return (
    <div className="container mt-4">
      <div className="row justify-content-center">
        <div className="col-12 col-md-8 col-lg-6">
          <form onSubmit={handleSubmit} className="border p-4 mb-4"  style={{backgroundColor:'beige'}}>
            <h2 className="text-center mb-4">Register as a Customer</h2>
            
            <div className="mb-3">
              <label htmlFor="exampleInputName" className="form-label">Name</label>
              <input 
                type="text" 
                className="form-control" 
                id="exampleInputName" 
                aria-describedby="nameHelp"
                onChange={(event) => setName(event.target.value)}  
              />
              {errors.name && <div className="form-text text-danger">{errors.name}</div>}
            </div>      

            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">Email</label>
              <input 
                type="email" 
                className="form-control" 
                id="exampleInputEmail1" 
                aria-describedby="emailHelp"
                onChange={(event) => setEmail(event.target.value)}  
              />
              <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
              {errors.email && <div className="form-text text-danger">{errors.email}</div>}
            </div>

            <div className="mb-3">
              <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
              <input 
                type="password" 
                className="form-control" 
                id="exampleInputPassword1" 
                onChange={(event) => setPassword(event.target.value)}
              />
              {errors.password && <div className="form-text text-danger">{errors.password}</div>}
            </div>

            <div className="mb-3">
              <label htmlFor="exampleInputPhone" className="form-label">Phone No.</label>
              <input 
                type="text" 
                className="form-control" 
                id="exampleInputPhone" 
                aria-describedby="phoneHelp"
                onChange={(event) => setPhone(event.target.value)}  
              />
              {errors.phone && <div className="form-text text-danger">{errors.phone}</div>}
            </div>   

            <div className="mb-3">
              <label htmlFor="exampleInputGender" className="form-label">Gender</label>
              <input 
                type="text" 
                className="form-control" 
                id="exampleInputGender" 
                aria-describedby="genderHelp" 
                onChange={(event) => setGender(event.target.value)}  
              />
              {errors.gender && <div className="form-text text-danger">{errors.gender}</div>}
            </div>  

            <button type="submit" className="btn btn-primary w-100">Register</button>
          </form>
          <div className="text-center">
            <Link to="/userLogin">If you are already registered then Login!</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserRegister;
