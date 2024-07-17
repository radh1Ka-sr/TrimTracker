import React from 'react';

const Saloon = () => {
  return (
    <div style={{ margin:'3rem',width: '20rem',height:'20rem',display:'flex',justifyContent:'center'}}>
      <div className="card" >
  <img src="https://content.jdmagicbox.com/comp/tiruchengode/u9/9999p4288.4288.191130191752.i5u9/catalogue/d8-salon-tiruchengode-w8qtjrukoi.jpg?clr=" className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">Saloon Name</h5>
    <li className="list-group-item">Email</li>
    <li className="list-group-item">Owner Name</li>
    <li className="list-group-item">Address</li>
  </div>
  <ul className="list-group list-group-flush">
    <li className="list-group-item">An item</li>
    <li className="list-group-item">A second item</li>
    <li className="list-group-item">A third item</li>
  </ul>
  <div className="card-body">
    <a href="#" className="card-link">Card link</a>
    <a href="#" className="card-link">Another link</a>
  </div>
</div>
    </div>
  );
}

export default Saloon;
