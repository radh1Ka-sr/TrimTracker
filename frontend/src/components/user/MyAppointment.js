import React, { useState, useEffect } from 'react';
import AppointmentTable from './AppointmentTable';

const MyAppointment = () => {
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'));
    const storedAppointments = JSON.parse(localStorage.getItem('appointments')) || [];
    const userAppointments = storedAppointments.filter(app => app.userId === user.id); // Filter appointments by user ID

    setAppointments(storedAppointments);
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