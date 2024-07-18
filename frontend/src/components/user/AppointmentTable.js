import React from 'react';

const AppointmentTable = ({ appointments }) => {
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
            <th scope="col">Saloon Name</th>
            <th scope="col">Address</th>
            <th scope="col">Appointment Start Time</th>
            <th scope="col">Appointment End Time</th>
            <th scope="col">Total Price</th>
          </tr>
        </thead>
        <tbody>
          {appointments.map((appointment, index) => (
            <tr key={index}>
              <th scope="row"><li style={{ marginLeft: '0.8rem' }}></li></th>
              <td>{appointment.saloonName}</td>
              <td>{appointment.address}</td>
              <td>{appointment.startTime}</td>
              <td>{appointment.endTime}</td>
              <td>{appointment.totalPrice}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AppointmentTable;
