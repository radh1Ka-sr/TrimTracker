import React from 'react';

const SaloonHome = () => {
  return (
    <div>
      <div style={{display:'flex', flexWrap:'wrap', justifyContent:'center'}}>
        <h4 style={{marginTop:'1.7rem'}}>List of Customer's appointed for services</h4>
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
              <th scope="col">Customer Name</th>
              <th scope="col">Customer Services</th>
              <th scope="col">Appointment Time</th>
              <th scope="col">Checkbox to mark</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row"><li style={{marginLeft:'0.8rem'}}></li></th>
              <td>Mark</td>
              <td>wax facial</td>
              <td>12:30:20</td>
              <td>
                <button 
                  type="button" 
                  className="btn btn-primary" 
                  title="Remove the user if done"
                >
                  In Process
                </button>
              </td>
            </tr>
            <tr>
              <td colSpan="5" style={{textAlign: 'center', fontWeight: 'bold', paddingTop: '2.5rem', paddingBottom:'1.5rem'}}><h4>Customer's in queue</h4></td>
            </tr>
            <tr>
              <th scope="row"><li style={{marginLeft:'0.8rem'}}></li></th>
              <td>Mark</td>
              <td>wax facial</td>
              <td>12:30:20</td>
              <td>
                <p>Pending</p>
              </td>
            </tr>
            <tr>
              <th scope="row"><li style={{marginLeft:'0.8rem'}}></li></th>
              <td>Mark</td>
              <td>wax facial</td>
              <td>12:30:20</td>
              <td>
                <p>Pending</p>
              </td>
            </tr>
            <tr>
              <th scope="row"><li style={{marginLeft:'0.8rem'}}></li></th>
              <td>Mark</td>
              <td>wax facial</td>
              <td>12:30:20</td>
              <td>
                <p>Pending</p>
              </td>
            </tr>
            <tr>
              <th scope="row"><li style={{marginLeft:'0.8rem'}}></li></th>
              <td>Mark</td>
              <td>wax facial</td>
              <td>12:30:20</td>
              <td>
                <p>Pending</p>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default SaloonHome;
