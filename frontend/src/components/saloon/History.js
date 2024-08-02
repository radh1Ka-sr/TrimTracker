import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const API_URL = 'http://localhost:3000'; // Replace with your actual backend URL

const History = () => {
  const [appointments, setAppointments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchDeletedAppointments = async () => {
      const token = localStorage.getItem('auth').replace(/(^"|"$)/g, '');
      if (!token) {
        navigate('/'); // Redirect to login if no token is found
        return;
      }

      try {
        const response = await axios.get(`${API_URL}/saloon/deleted-appointments`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        
        // Check if the response indicates an invalid token
        if (response.data.message === 'Token is not valid please login') {
          localStorage.removeItem('auth'); // Clear invalid token
          navigate('/'); // Redirect to login
          return;
        }
        
        const fetchedAppointments = response.data.data || [];
        // Sort appointments by deletedAt in descending order
        fetchedAppointments.sort((a, b) => new Date(b.deletedAt) - new Date(a.deletedAt));
        setAppointments(fetchedAppointments);
      } catch (error) {
        console.error('API Error:', error);
        setError('An error occurred while fetching appointments.');
      } finally {
        setLoading(false);
      }
    };
    fetchDeletedAppointments();
  }, [navigate]);

  if (loading) {
    return (
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        <div className="spinner-border" role="status">
          <span>Loading...</span>
        </div>
      </div>
    );
  }
  if (error) return <p>{error}</p>;

  return (
    <div style={{ backgroundColor: 'beige' }}>
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
        <h3 style={{ marginTop: '1.7rem' }}>Deleted Appointments History</h3>
      </div>
      {appointments.length === 0 ? (
        <p>No deleted appointments available.</p>
      ) : (
        <div style={{ margin: '2rem', marginLeft: '5rem' }}>
          <table className="table table-hover">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">User Name</th>
                <th scope="col">Services</th>
                <th scope="col">Total Price</th>
                <th scope="col">Completed At</th>
              </tr>
            </thead>
            <tbody>
              {appointments.map((appointment, index) => (
                <tr key={appointment._id}>
                  <th scope="row">{index + 1}</th>
                  <td>{appointment.userName}</td>
                  <td>{appointment.services.join(', ')}</td>
                  <td>{appointment.totalPrice}</td>
                  <td>{new Date(appointment.deletedAt).toLocaleString()}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default History;
