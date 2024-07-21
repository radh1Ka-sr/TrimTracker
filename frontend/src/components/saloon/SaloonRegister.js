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
    <div>
      <form onSubmit={handleSubmit} style={{marginTop:'3rem',marginLeft:'25rem',marginRight:'25rem',marginBottom:'1rem',borderStyle:'solid',borderColor:'ButtonShadow'}}>
        <h2 style={{display:'flex',justifyContent:'center',marginBottom:'1rem'}}>Register as a Saloon</h2>
        <div className="mb-3" style={{margin:'1rem'}}>
          <label htmlFor="exampleInputName" className="form-label">Name</label>
          <input type="text" className="form-control" id="exampleInputName" onChange={(event) => setName(event.target.value)} />
        </div>      
        <div className="mb-3" style={{margin:'1rem'}}>
          <label htmlFor="exampleInputEmail1" className="form-label">Email</label>
          <input type="email" className="form-control" id="exampleInputEmail1" onChange={(event) => setEmail(event.target.value)} />
          <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
        </div>
        <div className="mb-3" style={{margin:'1rem'}}>
          <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
          <input type="password" className="form-control" id="exampleInputPassword1" onChange={(event) => setPassword(event.target.value)} />
        </div>
        <div className="mb-3" style={{margin:'1rem'}}>
          <label htmlFor="exampleInputSaloonName" className="form-label">Saloon Name</label>
          <input type="text" className="form-control" id="exampleInputSaloonName" onChange={(event) => setSaloonName(event.target.value)} />
        </div>   
        <div className="mb-3" style={{margin:'1rem'}}>
          <label htmlFor="exampleInputAddress" className="form-label">Address</label>
          <input type="text" className="form-control" id="exampleInputAddress" onChange={(event) => setAddress(event.target.value)} />
        </div>  
        <div className="mb-3" style={{margin:'1rem'}}>
          <label htmlFor="exampleInputImageAddress" className="form-label">Image Address Link</label>
          <input type="text" className="form-control" id="exampleInputImageAddress" onChange={(event) => setImageAddress(event.target.value)} />
        </div>  
        <div style={{display:'flex',flexWrap:'wrap',borderStyle:'solid',borderColor:'lightblue',marginTop:'1rem',marginBottom:'1rem',margin:'1rem'}}>
          <div className="mb-3" style={{marginLeft:'1rem'}}>
            <label htmlFor="exampleInputService" className="form-label">Services</label>
            <input type="text" className="form-control" id="exampleInputService" onChange={(event) => setServiceInput(event.target.value)} value={serviceInput} />
          </div> 
          <div className="mb-3" style={{marginLeft:'1rem'}}>
            <label htmlFor="exampleInputPrice" className="form-label">Price</label>
            <input type="text" className="form-control" id="exampleInputPrice" onChange={(event) => setPriceInput(event.target.value)} value={priceInput} />
          </div> 
          <div className="mb-3" style={{marginLeft:'1rem'}}>
            <label htmlFor="exampleInputTime" className="form-label">Time in minutes</label>
            <input type="text" className="form-control" id="exampleInputTime" onChange={(event) => setTimeInput(event.target.value)} value={timeInput} />
          </div> 
          <button type="button" className="btn btn-primary" style={{ marginLeft:'1rem',width:'10rem',maxHeight:'2.3rem',marginTop:'1.5rem',marginBottom:'1rem'}} onClick={handleAddService}>Add More Services</button>
        </div>
        <button type="submit" className="btn btn-primary" style={{margin:'1rem'}}>Register</button>
      </form>
      <div style={{marginBottom:'2rem'}}>
        <Link to="/saloonLogin" style={{marginLeft:'25rem',marginRight:'25rem',marginBottom:'5rem'}}>If you are already registered then Login!</Link>
      </div>
    </div>
  );
}

export default SaloonRegister;
