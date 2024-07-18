import React, { useEffect, useState } from 'react';

const ServiceTable = ({ services, prices, times, onServiceChange }) => {
  const [selectedServices, setSelectedServices] = useState([]);

  const handleCheckboxChange = (service, price) => {
    setSelectedServices(prevSelected =>
      prevSelected.includes(service)
        ? prevSelected.filter(s => s !== service)
        : [...prevSelected, service]
    );
  };

  useEffect(() => {
    const selectedPrices = selectedServices.map(service => {
      const index = services.indexOf(service);
      return prices[index];
    });
    const totalPrice = selectedPrices.reduce((acc, price) => acc + price, 0);
    onServiceChange(selectedServices, totalPrice);
  }, [selectedServices, onServiceChange, services, prices]);

  return (
    <table className="table table-hover">
      <thead>
        <tr>
          <th scope="col">Services</th>
          <th scope="col">Prices (Rs)</th>
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
                  onChange={() => handleCheckboxChange(service, prices[index])}
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
