import React from 'react';

const UserHome = () => {
  return (
    <div>
     <div className="card" style={{width: '18rem',marginTop:'1.5rem',marginLeft:'1.5rem'}}>
  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIse0KhEa81SKl5tsG0q3wf-34vk7rj3swv4XbYg9J-nx14pfEP4X1fS2vl2dfmvIg1vM&usqp=CAU" className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">Saloon Name</h5>
    <p className="card-text">Address of Saloon.</p>
    <a href="#" className="btn btn-dark">Lets Get into the Shop</a>
  </div>
</div>
    </div>
  );
}

export default UserHome;
