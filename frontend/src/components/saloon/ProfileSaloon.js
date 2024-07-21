import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import ProfileTable from './ProfileTable';

const ProfileSaloon = () => {
  const navigate = useNavigate();
  const saloonLocalStorageData = JSON.parse(localStorage.getItem('saloon'));
  const saloonId = saloonLocalStorageData._id;
  const [saloonData, setSaloonData] = useState(saloonLocalStorageData);
  const [selectedServices, setSelectedServices] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [error, setError] = useState(null);
  const [appointmentStartTime, setAppointmentStartTime] = useState('');
  const [appointmentEndTime, setAppointmentEndTime] = useState('');



  return (
    <div style={{ display: 'flex', justifyContent: 'space-evenly' }}>
      <div style={{ margin: '3rem', width: '32rem', height: '20rem' }}>
        <div className="card">
          <img
            src={saloonData.imageAddress}
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
        <ProfileTable
          services={saloonData.services}
          prices={saloonData.prices}
          times={saloonData.averageTimes}
      
        />
        
      </div>
    </div>
  );
};

export default ProfileSaloon;
