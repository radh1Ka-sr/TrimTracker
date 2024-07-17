// ServiceTable.js
import React, {useEffect, useState } from 'react';

const ServiceTable = ({ services, prices, times, onServiceChange }) => {
  const [selectedServices, setSelectedServices] = useState([]);

  const handleCheckboxChange = (service) => {
    setSelectedServices(prevSelected =>
      prevSelected.includes(service)
        ? prevSelected.filter(s => s !== service)
        : [...prevSelected, service]
    );
  };

  useEffect(() => {
    onServiceChange(selectedServices);
  }, [selectedServices, onServiceChange]);

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
                <input
                  className="form-check-input"
                  type="checkbox"
                  value={service}
                  id={`service-${index}`}
                  onChange={() => handleCheckboxChange(service)}
                />
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
