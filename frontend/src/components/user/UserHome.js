import React, { useEffect, useState } from 'react';
import Card from './Card';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

const UserHome = () => {
  const [saloonData, setSaloonData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  const init = async () => {
    try {
      const token = localStorage.getItem('auth').replace(/(^"|"$)/g, '');
      const response = await axios.get('http://localhost:3000/user/', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const sortedData = response.data.saloon.sort((a, b) => a.endTime - b.endTime);
      setSaloonData(sortedData);
      setLoading(false);
    } catch (err) {
      setError(err);
      setLoading(false);
    }
  };

  useEffect(() => {
    init();
  }, []);

  if (loading) {
    return (
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        <div className="spinner-border" role="status">
          <span>Loading...</span>
        </div>
      </div>
    );
  }

  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-evenly', backgroundColor:'beige' }}>
      {saloonData.map((saloon, index) => (
        <Card 
          key={index} 
          imageSrc={saloon.imageAddress} 
          title={saloon.saloonName} 
          text={saloon.address} 
          link={saloon._id}
        />
      ))}
      {error && <div>Error: {error.message}</div>}
    </div>
  );
};

export default UserHome;
