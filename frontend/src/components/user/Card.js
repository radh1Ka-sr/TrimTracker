// Card.js
import React from 'react';
// import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';


const Card = ({ imageSrc, title, text , link}) => {

  const navigate = useNavigate();
  return (
    <div className="card" style={{ width: '18rem', marginTop: '1.5rem', marginLeft: '1.5rem' }}>
      <img src={imageSrc} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{text}</p>
        <button  type="button"  className="btn btn-primary" 
        onClick={() => navigate(`/userAddAppointment/${link}`)} >Lets Get into the Shop</button>
      </div>
    </div>
  );
}

export default Card;
