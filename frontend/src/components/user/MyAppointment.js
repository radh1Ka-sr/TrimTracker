import React, { useState, useEffect } from 'react';
import AppointmentTable from './AppointmentTable';
import axios from 'axios';

const MyAppointment = () => {
  const [appointments, setAppointments] = useState([]);
  const [error, setError] = useState(null);
  

  const fetchSaloonData = async () => {
    try {
      const token = localStorage.getItem('auth').replace(/(^"|"$)/g, '');
      const response = await axios.get(`http://localhost:3000/user/myAppointments`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const reversedAppointments = response.data.myAppointments.reverse();
      setAppointments(reversedAppointments);
      
      // setSaloonData(response.data.data);
      // setImage(response.data.data.imageAddress);
    } catch (err) {
      setError(err);
    }
  };

  useEffect(() => {
    fetchSaloonData();
  }, []);

  return (
    <div>
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
        <h4 style={{ marginTop: '1.7rem' }}>Your Appointment List</h4>
        <img
          src="https://t3.ftcdn.net/jpg/05/24/30/20/360_F_524302085_lZ82Bsfc7OECPdtVv0isnvda88BMHIJB.jpg"
          alt="Logo"
          style={{ marginTop: '1.5rem', width: '40px', height: '40px' }}
        />
      </div>
      <AppointmentTable appointments={appointments} />
    </div>
  );
};

export default MyAppointment;