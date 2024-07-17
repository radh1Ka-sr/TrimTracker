import React, { useState } from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


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


  const handleAddService = () => {
    if (!serviceInput || !priceInput || !timeInput) {
      alert('Please fill all the fields for the service, price, and time.');
      return;
    }

    setServices([...services, serviceInput]);
    setPrices([...prices, priceInput]);
    setAverageTimes([...averageTimes, timeInput]);

    alert(serviceInput + ' Service Added with Price ' + priceInput + ' and with Time ' + timeInput + 'minutes');
    setServiceInput('');
    setPriceInput('');
    setTimeInput('');
  };


  const handleSubmit = (event) => {
    event.preventDefault();
    
    axios.post( 'http://localhost:3000/saloon/signup', {
      name , email, password, saloonName, address, imageAddress, services, prices, averageTimes})
    .then(result => {
        console.log(result);
        if(result.data.message === "Saloon created successfully"){
            console.log("Login Success");
            alert('Registered Succissfully')
            navigate('/saloonLogin');
        }
        else{
            alert('Incorrect password! Please try again.');
        }
    })
    .catch(err => console.log(err));
}

  

  return (
    <div>
       <form onSubmit={handleSubmit} style={{marginTop:'3rem',marginLeft:'25rem',marginRight:'25rem',marginBottom:'1rem',borderStyle:'solid',borderColor:'ButtonShadow'}}>
        <h2 style={{display:'flex',justifyContent:'center',marginBottom:'1rem'}}>Register as a Saloon </h2>
      <div className="mb-3" style={{margin:'1rem'}}>
    <label for="exampleInputEmail1" className="form-label">Name</label>
    <input type="name" className="form-control" id="exampleInputname" aria-describedby="nameHelp"
    onChange={(event) => setName(event.target.value)}  />
  </div>      
  <div className="mb-3" style={{margin:'1rem'}}>
    <label for="exampleInputEmail1" className="form-label">Email</label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
    onChange={(event) => setEmail(event.target.value)} />
    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div className="mb-3" style={{margin:'1rem'}}>
    <label for="exampleInputPassword1" className="form-label">Password</label>
    <input type="password" className="form-control" id="exampleInputPassword1"
    onChange={(event) => setPassword(event.target.value)} />
  </div>
  <div className="mb-3" style={{margin:'1rem'}}>
    <label for="exampleInputEmail1" className="form-label">Saloon Name</label>
    <input type="name" className="form-control" id="exampleInputname" aria-describedby="nameHelp"
    onChange={(event) => setSaloonName(event.target.value)} />
  </div>   
  <div className="mb-3" style={{margin:'1rem'}}>
    <label for="exampleInputEmail1" className="form-label">Address</label>
    <input type="name" className="form-control" id="exampleInputname" aria-describedby="nameHelp"
    onChange={(event) => setAddress(event.target.value)} />
  </div>  
  <div className="mb-3" style={{margin:'1rem'}}>
    <label for="exampleInputEmail1" className="form-label">Image Address Link</label>
    <input type="name" className="form-control" id="exampleInputname" aria-describedby="nameHelp"
    onChange={(event) => setImageAddress(event.target.value)} />
  </div>  
  <div style={{display:'flex',flexWrap:'wrap',borderStyle:'solid',borderColor:'lightblue',marginTop:'1rem',marginBottom:'1rem',margin:'1rem'}}>
  <div className="mb-3" style={{marginLeft:'1rem'}}>
    <label for="exampleInputEmail1" className="form-label" >Services</label>
    <input type="name" className="form-control" id="exampleInputname" aria-describedby="nameHelp" 
    onChange={(event) => setServiceInput(event.target.value)} value={serviceInput} />
  </div> 
  <div className="mb-3" style={{marginLeft:'1rem'}}>
    <label for="exampleInputEmail1" className="form-label">Price</label>
    <input type="name" className="form-control" id="exampleInputname" aria-describedby="nameHelp"
    onChange={(event) => setPriceInput(event.target.value)} value={priceInput} />
  </div> 
  <div className="mb-3" style={{marginLeft:'1rem'}}>
    <label for="exampleInputEmail1" className="form-label">Time in minutes</label>
    <input type="name" className="form-control" id="exampleInputname" aria-describedby="nameHelp"
    onChange={(event) => setTimeInput(event.target.value)}  value={timeInput} />
  </div> 
  
  <button type="button" class="btn btn-primary" style={{ marginLeft:'1rem',width:'10rem',maxHeight:'2.3rem',marginTop:'1.5rem',marginBottom:'1rem'}}   onClick={handleAddService} >Add More Services</button>

  </div>
  <button type="submit" className="btn btn-primary" style={{margin:'1rem'}}>Register</button>
 
</form>
<div style={{marginBottom:'2rem'}}>
<Link to="/saloonLogin" style={{marginLeft:'25rem',marginRight:'25rem',marginBottom:'5rem'}} >If you are already registered then Login!</Link>
</div>

    </div>
  );
}

export default SaloonRegister;
