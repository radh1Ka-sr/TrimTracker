import React, { useEffect, useState } from 'react';
import Card from './Card';
import axios from 'axios';

const UserHome = () => {
  const [saloonData, setSaloonData] = useState([]);
  const [error, setError] = useState(null);

  const init = async () => {
    try {
      const token = localStorage.getItem('auth').replace(/(^"|"$)/g, '');
      const response = await axios.get('http://localhost:3000/user/', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setSaloonData(response.data.saloon);
      // console.log(response)
      
    } catch (err) {
      setError(err);
      
    }
  };

  useEffect(() => {
    init();
  }, []);

  

  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-evenly' }}>
      {saloonData.map((saloon, index) => (
        <Card 
          key={index} 
          imageSrc={saloon.imageAddress} 
          title={saloon.saloonName} 
          text={saloon.address} 
          link = {saloon._id}
        />
      ))}
    </div>
  );
};

export default UserHome;
