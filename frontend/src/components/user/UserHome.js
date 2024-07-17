// UserHome.js
import React from 'react';
import Card from './Card';

const saloons = [
  {
    imageSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIse0KhEa81SKl5tsG0q3wf-34vk7rj3swv4XbYg9J-nx14pfEP4X1fS2vl2dfmvIg1vM&usqp=CAU",
    title: "Saloon Name 1",
    text: "Address of Saloon 1",
    link: "#"
  },
  {
    imageSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIse0KhEa81SKl5tsG0q3wf-34vk7rj3swv4XbYg9J-nx14pfEP4X1fS2vl2dfmvIg1vM&usqp=CAU",
    title: "Saloon Name 2",
    text: "Address of Saloon 2",
    link: "#"
  },
  // Add more saloons as needed
];

const UserHome = () => {
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-evenly' }}>
      {saloons.map((saloon, index) => (
        <Card 
          key={index} 
          imageSrc={saloon.imageSrc} 
          title={saloon.title} 
          text={saloon.text} 
          link={saloon.link} 
        />
      ))}
    </div>
  );
}

export default UserHome;
