import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import ServiceTable from './ServiceTable';
import { useToast } from '@chakra-ui/react';

const AddAppointment = () => {
  const navigate = useNavigate();
  const { saloonId } = useParams();
  const [saloonData, setSaloonData] = useState(null);
  const [selectedServices, setSelectedServices] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [error, setError] = useState(null);
  const [image, setImage] = useState('');
  const [appointmentStartTime, setAppointmentStartTime] = useState('');
  const [appointmentEndTime, setAppointmentEndTime] = useState('');

  const toast = useToast();

  const fetchSaloonData = async () => {
    try {
      const token = localStorage.getItem('auth').replace(/(^"|"$)/g, '');
      const response = await axios.get(`https://trimtracker-3.onrender.com/user/${saloonId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setSaloonData(response.data.data);
      setImage(response.data.data.imageAddress);
    } catch (err) {
      setError(err);
    }
  };

  useEffect(() => {
    fetchSaloonData();
  }, [saloonId]);

  const handleServiceChange = (selected, totalPrice) => {
    setSelectedServices(selected);
    setTotalPrice(totalPrice);
  };

  const handleSubmit = async () => {
    try {
      const token = localStorage.getItem('auth').replace(/(^"|"$)/g, '');
      const user = JSON.parse(localStorage.getItem('user')); 
      const response = await axios.post(
        `https://trimtracker-3.onrender.com/user/${saloonId}/appointment`,
        { services: selectedServices },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setAppointmentStartTime(response.data.startTime.substring(0, 25));
      setAppointmentEndTime(response.data.endTime.substring(0, 25));

      toast({
        title: "Appointment Done",
        description: `Your selected services are ${selectedServices} and Total Price is ₹ ${totalPrice}.`,
        status: "success",
        duration: 6000,
        isClosable: true,
      });
      navigate('/userMyAppointment');
    } catch (err) {
      console.error(err);
    }
  };

  if (error) {
    return <div>Error fetching saloon data.</div>;
  }

  if (!saloonData) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mt-4">
      <div className="row justify-content-center">
        <div className="col-12 col-md-6 mb-4">
          <div className="card">
            <img
              src={image}
              className="card-img-top"
              alt="Saloon"
            />
            <div className="card-body">
              <h5 className="card-title text-center">{saloonData.saloonName}</h5>
              <ul className="list-group list-group-flush">
                <li className="list-group-item">Email: {saloonData.email}</li>
                <li className="list-group-item">Owner: {saloonData.name}</li>
                <li className="list-group-item">Address: {saloonData.address}</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col-12 col-md-6 mb-4">
          <ServiceTable
            services={saloonData.services}
            prices={saloonData.prices}
            times={saloonData.averageTimes}
            onServiceChange={handleServiceChange}
          />
          <div className="d-flex justify-content-end mt-3">
            <button type="button" className="btn btn-primary" onClick={handleSubmit}>
              Book Appointment
            </button>
          </div>
          <div className="mt-3">
            <h4>Total Price: ₹ {totalPrice}</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddAppointment;
