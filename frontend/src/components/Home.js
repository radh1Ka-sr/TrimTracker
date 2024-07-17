import React from 'react';
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <div style={{backgroundColor:"lavenderblush"}}>
    <div  className="container" style={{marginTop: "50px"}}>
      <div className="d-flex justify-content-between">
        <div className="card" style={{width: "20rem"}}>
          <img src="https://img.freepik.com/premium-vector/hair-saloon-design_25030-23607.jpg" className="card-img-top" alt="..."/>
          <div className="card-body">
           
            <p className="card-text">Click Here for Registering as a Saloon.</p>
            <Link to="/saloonRegister" className="btn " style={{backgroundColor:"maroon",color:"white"}}>Saloon</Link>
          </div>
        </div>
        <div className="card" style={{width: "20rem"}}>
          <img src="https://i.pinimg.com/originals/02/47/e5/0247e5518fd967e859beaab8fe510d52.jpg" className="card-img-top" alt="..."/>
          <div className="card-body">
           
            <p className="card-text">Click Here for Registering as a Customer .</p>
            <Link to="/userRegister" className="btn " style={{backgroundColor:"maroon",color:"white"}}>Customer</Link>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}

export default Home;
