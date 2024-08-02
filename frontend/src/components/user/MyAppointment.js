import React, { useState, useEffect } from 'react';
import AppointmentTable from './AppointmentTable';
import axios from 'axios';

const MyAppointment = () => {
  const [appointments, setAppointments] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  

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
      setLoading(false);
      
    } catch (err) {
      setError(err);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchSaloonData();
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
    <div style={{backgroundColor:'beige'}}>
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