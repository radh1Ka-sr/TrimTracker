// ServiceTable.js
import React from 'react';

const ServiceTable = ({ services, prices, times }) => {
  return (
    <table className="table">
      <thead>
        <tr>
          <th scope="col">Services</th>
          <th scope="col">Prices</th>
          <th scope="col">Time(min)</th>
        </tr>
      </thead>
      <tbody>
        {services.map((service, index) => (
          <tr key={index}>
            <td>
              <div className="form-check">
                <input className="form-check-input" type="checkbox" value={service} id={`service-${index}`} />
                <label className="form-check-label" htmlFor={`service-${index}`}>
                  {service}
                </label>
              </div>
            </td>
            <td>{prices[index]}</td>
            <td>{times[index]}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ServiceTable;