// Card.js
import React from 'react';

const Card = ({ imageSrc, title, text, link }) => {
  return (
    <div className="card" style={{ width: '18rem', marginTop: '1.5rem', marginLeft: '1.5rem' }}>
      <img src={imageSrc} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{text}</p>
        <a href={link} className="btn btn-dark">Lets Get into the Shop</a>
      </div>
    </div>
  );
}

export default Card;
