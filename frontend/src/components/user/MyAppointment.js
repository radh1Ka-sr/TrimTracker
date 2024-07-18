import React from 'react';

const Myappointment = () => {
  return (
    <div>
      <div style={{display:'flex', flexWrap:'wrap', justifyContent:'center'}}>
        <h4 style={{marginTop:'1.7rem'}}>Your Appointment List</h4>
        <img 
          src="https://t3.ftcdn.net/jpg/05/24/30/20/360_F_524302085_lZ82Bsfc7OECPdtVv0isnvda88BMHIJB.jpg" 
          alt="Logo" 
          style={{marginTop: '1.5rem', width: '40px', height: '40px'}}
        />
      </div>
      <div style={{margin:'2rem'}}>
        <table className="table table-striped">
          <thead>
            <tr>
              <th scope="col">
                <img 
                  src="https://t3.ftcdn.net/jpg/05/24/30/20/360_F_524302085_lZ82Bsfc7OECPdtVv0isnvda88BMHIJB.jpg" 
                  alt="Logo" 
                  style={{marginTop: '1.5rem', width: '40px', height: '40px'}}
                />
              </th>
              <th scope="col">Saloon Name</th>
              <th scope="col">Contact Info.</th>
              <th scope="col">Address</th>
              <th scope="col">Appointment Time</th>
              <th scope="col">Total Price</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row"><li style={{marginLeft:'0.8rem'}}></li></th>
              <td>Mark</td>
              <td>wax facial</td>
              <td>12:30:20</td>
              <td>wax facial</td>
              <td>12:30:20</td>
            </tr>
            <tr>
              <th scope="row"><li style={{marginLeft:'0.8rem'}}></li></th>
              <td>Mark</td>
              <td>wax facial</td>
              <td>12:30:20</td>
              <td>wax facial</td>
              <td>12:30:20</td>
            </tr>
            <tr>
              <th scope="row"><li style={{marginLeft:'0.8rem'}}></li></th>
              <td>Mark</td>
              <td>wax facial</td>
              <td>12:30:20</td>
              <td>wax facial</td>
              <td>12:30:20</td>
            </tr>
            <tr>
              <th scope="row"><li style={{marginLeft:'0.8rem'}}></li></th>
              <td>Mark</td>
              <td>wax facial</td>
              <td>12:30:20</td>
              <td>wax facial</td>
              <td>12:30:20</td>
            </tr>
            
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Myappointment;
