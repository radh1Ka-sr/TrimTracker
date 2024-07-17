import React from 'react';

const AddAppointment = () => {
  return (
    <div style={{display:'flex',justifyContent:'space-evenly'}} >
      <div style={{ margin:'3rem',width: '32rem',height:'20rem'}} >
      <div className="card" >
  <img src="https://media.istockphoto.com/id/827536320/photo/hairdresser-washing-womans-hair-in-hairdresser-salon.jpg?s=612x612&w=0&k=20&c=u85RRwuvK6Hb6JPY2UPwQMZR-Pvk8Mcmf-DqaoApWkY=" className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title"style={{display:'flex',justifyContent:'center'}} >Katrina Beauty Parlour</h5>
    <li className="list-group-item">email : kat@gmail.com</li>
    <li className="list-group-item">Owner : Radhika singh Rajawat</li>
    <li className="list-group-item">Address : Orai</li>
  </div>
</div>
</div>

 
    
    <div style={{ margin:'3rem',width: '30rem',height:'20rem'}}>
    <table class="table">
  <thead>
    <tr>
      
      <th scope="col">Services</th>
      <th scope="col">Prices</th>
      <th scope="col">Time(min)</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      
      <div class="form-check">
  <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
  <label class="form-check-label" for="flexCheckDefault">
    Hair Cut
  </label>
</div>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
    <tr>
      
      <div class="form-check">
  <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
  <label class="form-check-label" for="flexCheckDefault">
    Hair Cut
  </label>
</div>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
    <tr>
      
      <div class="form-check">
  <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
  <label class="form-check-label" for="flexCheckDefault">
    Hair Cut
  </label>
</div>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
    
  </tbody>
</table>
<div style={{display:'flex',justifyContent:'right',marginTop:'1.7rem'}}>
<button type="button" class="btn btn-primary"  >Book Appointment</button>
</div>

    </div>
    </div>
  );
}

export default AddAppointment;
