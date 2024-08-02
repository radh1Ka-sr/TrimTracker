import React from 'react';
import axios from 'axios';
import { useToast } from '@chakra-ui/react'; // Imported useToast

const formatDate = (dateString) => {
  const date = new Date(dateString);
  const formattedDate = date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'numeric',
    day: 'numeric'
  });
  const formattedTime = date.toLocaleTimeString('en-US', {
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
    hour12: true
  });
  return `${formattedDate}\n${formattedTime}`;
};

const SaloonAppointmentTable = ({ appointments, setAppointments, toast }) => { // Added toast prop

  const handleClick = async (appointmentId) => {
    try {
      const token = localStorage.getItem('auth').replace(/(^"|"$)/g, '');
      await axios.delete(`http://localhost:3000/saloon/${appointmentId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      // Remove the deleted appointment from the state
      setAppointments(prevAppointments => prevAppointments.filter(app => app._id !== appointmentId));

      // Show toast notification
      toast({
        title: "Appointment Completed.",
        description: "The appointment has been successfully completed.",
        status: "success",
        duration: 5000,
        isClosable: true,
      });
    } catch (error) {
      console.error('Error deleting appointment:', error);
      // Show error toast notification
      toast({
        title: "Error deleting appointment.",
        description: "There was an error deleting the appointment. Please try again.",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
    }
  };

  return (
    <div style={{ margin: '2rem' }}>
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">
              <img 
                src="https://t3.ftcdn.net/jpg/05/24/30/20/360_F_524302085_lZ82Bsfc7OECPdtVv0isnvda88BMHIJB.jpg" 
                alt="Logo" 
                style={{ marginTop: '1.5rem', width: '40px', height: '40px' }}
              />
            </th>
            <th scope="col">Customer Name</th>
            <th scope="col">Customer Services</th>
            <th scope="col">Appointment Time</th>
            <th scope="col">Status</th>
          </tr>
        </thead>
        <tbody>
          {appointments.map((appointment, index) => (
            <React.Fragment key={appointment._id}>
              <tr>
                <th scope="row"><li style={{ marginLeft: '0.8rem' }}></li></th>
                <td>{appointment.userName}</td>
                <td>{appointment.services.join(', ')}</td>
                <td style={{ whiteSpace: 'pre-wrap' }}>{formatDate(appointment.startTime)}</td>
                <td>
                  {index === 0 ? (
                    <button 
                      type="button" 
                      className="btn btn-primary" 
                      title="Remove the user if done"
                      onClick={() => handleClick(appointment._id)}
                    >
                      In Process
                    </button>
                  ) : (
                    <p>Pending</p>
                  )}
                </td>
              </tr>
              {index === 0 && (
                <tr>
                  <td colSpan="5" style={{ textAlign: 'center', fontWeight: 'bold', paddingTop: '2.5rem', paddingBottom: '1.5rem', backgroundColor:'beige'}}>
                    <h4>Customer's in queue</h4>
                  </td>
                </tr>
              )}
            </React.Fragment>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SaloonAppointmentTable;
