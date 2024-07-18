// AddAppointment.js
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import ServiceTable from './ServiceTable';
import { useNavigate } from 'react-router-dom';

const AddAppointment = () => {
  const navigate = useNavigate();
  const { saloonId } = useParams();
  const [saloonData, setSaloonData] = useState(null);
  const [selectedServices, setSelectedServices] = useState([]);
  const [error, setError] = useState(null);
  const [image, setImage] = useState('');

  const fetchSaloonData = async () => {
    try {
      const token = localStorage.getItem('auth').replace(/(^"|"$)/g, '');
      const response = await axios.get(`http://localhost:3000/user/${saloonId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setSaloonData(response.data.data);
      setImage(response.data.data.imageAddress);
      console.log(response)
    } catch (err) {
      setError(err);
    }
  };

  useEffect(() => {
    fetchSaloonData();
  }, [saloonId]);

  const handleServiceChange = (selected) => {
    setSelectedServices(selected);
  };

  const handleSubmit = async () => {
    try {
      const token = localStorage.getItem('auth').replace(/(^"|"$)/g, '');
      const response = await axios.post(
        `http://localhost:3000/user/${saloonId}/appointment`,
        { services: selectedServices },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      navigate('/userMyAppointment');
      console.log(response.data);
    } catch (err) {
      console.error(err);
    }
  };

  if (error) {
    return <div>Error fetching saloon data.</div>;
  }

  if (!saloonData) {
    return <div>Loading...</div>;
  }

  return (
    <div style={{ display: 'flex', justifyContent: 'space-evenly' }}>
      <div style={{ margin: '3rem', width: '32rem', height: '20rem' }}>
        <div className="card">
          <img
            src={image}
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title" style={{ display: 'flex', justifyContent: 'center' }}>
              {saloonData.saloonName}
            </h5>
            <li className="list-group-item">Email : {saloonData.email}</li>
            <li className="list-group-item">Owner : {saloonData.name}</li>
            <li className="list-group-item">Address : {saloonData.address}</li>
          </div>
        </div>
      </div>
      <div style={{ margin: '3rem', width: '30rem', height: '20rem' }}>
        <ServiceTable
          services={saloonData.services}
          prices={saloonData.prices}
          times={saloonData.averageTimes}
          onServiceChange={handleServiceChange}
        />
        <div style={{ display: 'flex', justifyContent: 'right', marginTop: '1.7rem' }}>
          <button type="button" className="btn btn-primary" onClick={handleSubmit}>
            Book Appointment
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddAppointment;
