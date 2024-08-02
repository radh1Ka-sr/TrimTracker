import React, { useState } from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useToast } from '@chakra-ui/react'; // Import useToast

const SaloonRegister = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [saloonName, setSaloonName] = useState('');
  const [address, setAddress] = useState('');
  const [imageAddress, setImageAddress] = useState('');
  const [services, setServices] = useState([]);
  const [prices, setPrices] = useState([]);
  const [averageTimes, setAverageTimes] = useState([]);
  const [serviceInput, setServiceInput] = useState('');
  const [priceInput, setPriceInput] = useState('');
  const [timeInput, setTimeInput] = useState('');

  const navigate = useNavigate();
  const toast = useToast(); // Initialize toast

  const handleAddService = () => {
    if (!serviceInput || !priceInput || !timeInput) {
      toast({
        title: "Missing Fields",
        description: "Please fill all the fields for the service, price, and time.",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
      return;
    }

    setServices([...services, serviceInput]);
    setPrices([...prices, priceInput]);
    setAverageTimes([...averageTimes, timeInput]);

    toast({
      title: "Service Added",
      description: `${serviceInput} service added with price ${priceInput} and time ${timeInput} minutes.`,
      status: "success",
      duration: 5000,
      isClosable: true,
    });
    setServiceInput('');
    setPriceInput('');
    setTimeInput('');
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    
    axios.post('http://localhost:3000/saloon/signup', {
      name, email, password, saloonName, address, imageAddress, services, prices, averageTimes
    })
    .then(result => {
      console.log(result);
      if (result.data.message === "Saloon created successfully") {
        toast({
          title: "Registration Successful",
          description: "Saloon registered successfully.",
          status: "success",
          duration: 5000,
          isClosable: true,
        });
        navigate('/saloonLogin');
      } else {
        toast({
          title: "Registration Failed",
          description: "An error occurred during registration. Please try again.",
          status: "error",
          duration: 5000,
          isClosable: true,
        });
      }
    })
    .catch(err => {
      toast({
        title: "Registration Failed",
        description: "An error occurred. Please check your network connection and try again.",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
      console.log(err);
    });
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-12 col-md-8 col-lg-6">
          <form onSubmit={handleSubmit} className="border p-4" style={{ borderRadius: '10px',backgroundColor:'beige' }}>
            <h2 className="text-center mb-4">Register as a Saloon</h2>
            <div className="mb-3">
              <label htmlFor="exampleInputName" className="form-label">Name</label>
              <input type="text" className="form-control" id="exampleInputName" onChange={(event) => setName(event.target.value)} />
            </div>      
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">Email</label>
              <input type="email" className="form-control" id="exampleInputEmail1" onChange={(event) => setEmail(event.target.value)} />
              <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
              <input type="password" className="form-control" id="exampleInputPassword1" onChange={(event) => setPassword(event.target.value)} />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputSaloonName" className="form-label">Saloon Name</label>
              <input type="text" className="form-control" id="exampleInputSaloonName" onChange={(event) => setSaloonName(event.target.value)} />
            </div>   
            <div className="mb-3">
              <label htmlFor="exampleInputAddress" className="form-label">Address</label>
              <input type="text" className="form-control" id="exampleInputAddress" onChange={(event) => setAddress(event.target.value)} />
            </div>  
            <div className="mb-3">
              <label htmlFor="exampleInputImageAddress" className="form-label">Image Address Link</label>
              <input type="text" className="form-control" id="exampleInputImageAddress" onChange={(event) => setImageAddress(event.target.value)} />
            </div>  
            <div className="border p-3 mb-4" style={{ borderRadius: '10px', borderColor: 'lightblue' }}>
              <div className="mb-3">
                <label htmlFor="exampleInputService" className="form-label">Services</label>
                <input type="text" className="form-control" id="exampleInputService" onChange={(event) => setServiceInput(event.target.value)} value={serviceInput} />
              </div> 
              <div className="mb-3">
                <label htmlFor="exampleInputPrice" className="form-label">Price</label>
                <input type="text" className="form-control" id="exampleInputPrice" onChange={(event) => setPriceInput(event.target.value)} value={priceInput} />
              </div> 
              <div className="mb-3">
                <label htmlFor="exampleInputTime" className="form-label">Time in minutes</label>
                <input type="text" className="form-control" id="exampleInputTime" onChange={(event) => setTimeInput(event.target.value)} value={timeInput} />
              </div> 
              <button type="button" className="btn btn-primary" onClick={handleAddService}>Add More Services</button>
            </div>
            <button type="submit" className="btn btn-primary">Register</button>
          </form>
          <div className="text-center mt-4">
            <Link to="/saloonLogin">If you are already registered then Login!</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SaloonRegister;
