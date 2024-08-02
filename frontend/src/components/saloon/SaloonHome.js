import React, { useState, useEffect } from 'react';
import axios from 'axios';
import SaloonAppointmentTable from './SaloonAppointmentTable';
import { ChakraProvider, useToast } from '@chakra-ui/react'; // Imported ChakraProvider and useToast

const SaloonHome = () => {
  const [appointments, setAppointments] = useState([]);
  const [error, setError] = useState(null);
  const toast = useToast(); // Initialized useToast
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAppointments = async () => {
      try {
        const token = localStorage.getItem('auth').replace(/(^"|"$)/g, '');
        const response = await axios.get('http://localhost:3000/saloon', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setAppointments(response.data.data);
        setLoading(false);
      } catch (err) {
        setError(err);
        setLoading(false);
      }
    };

    fetchAppointments();
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

  if (error) {
    return <div>Error fetching appointments.</div>;
  }

  return (
    <div style={{backgroundColor:'beige'}}>
    <ChakraProvider >
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center'}}>
        <h4 style={{ marginTop: '1.7rem' }}>List of Customer's appointed for services</h4>
        <img 
          src="https://t3.ftcdn.net/jpg/05/24/30/20/360_F_524302085_lZ82Bsfc7OECPdtVv0isnvda88BMHIJB.jpg" 
          alt="Logo" 
          style={{ marginTop: '1.5rem', width: '40px', height: '40px' }}
        />
      </div>
      <SaloonAppointmentTable appointments={appointments} setAppointments={setAppointments} toast={toast} /> {/* Passed toast prop */}
    </ChakraProvider>
    </div>
  );
};

export default SaloonHome;
