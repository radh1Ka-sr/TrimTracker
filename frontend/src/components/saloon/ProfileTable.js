import React, { useEffect, useState } from 'react';

const ProfileTable = ({ services, prices, times}) => {


  return (
    <table className="table table-hover">
      <thead>
        <tr>
          <th scope="col">Services Provided</th>
          <th scope="col">Prices (Rs)</th>
          <th scope="col">Time(min)</th>
        </tr>
      </thead>
      <tbody>
        {services.map((service, index) => (
          <tr key={index}>
           
            <td>{services[index]}</td>
            <td>{prices[index]}</td>
            <td>{times[index]}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ProfileTable;
