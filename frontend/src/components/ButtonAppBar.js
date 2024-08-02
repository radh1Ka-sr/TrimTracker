import React from 'react';
import { useNavigate , Link} from 'react-router-dom';

const ButtonAppBar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.clear();
    navigate('/');
  };

  const handleMyAppointment = () => {
    navigate('/userMyAppointment');
  };
  const handleMyHistory = () => {
    navigate('/saloonHistory');
  };
  const getTrimTrackerLink = () => {
    if (!token) {
      return '/';
    } else if (saloonData) {
      return '/saloonHome';
    } else if (userData) {
      return '/userHome';
    }
    return '/';
  };

  const token = localStorage.getItem('auth');
  const saloonData = JSON.parse(localStorage.getItem('saloon'));
  const userData = JSON.parse(localStorage.getItem('user'));

  return (
    <div>
      <nav className="navbar" data-bs-theme="dark" style={{ backgroundColor: "Black" }}>
        <ul className="nav">
          <li className="nav-item">
            <Link className="nav-link active" aria-current="page" style={{ color: "white" }} to={getTrimTrackerLink()}>
              Trim Tracker
            </Link>
          </li>
        </ul>
        <ul className="nav justify-content-center">
          {token && saloonData && (
            <li className="nav-item">
              <Link to="/saloonProfile" className="nav-link" style={{ color: "white" }}>
               {saloonData.name}
              </Link>
            </li>
          )}
          {token && userData && (
            <li className="nav-item">
              <span className="nav-link" style={{ color: "white" }}>
                {userData.name}
              </span>
            </li>
          )}
        </ul>
        <ul className="nav justify-content-end">
          {!token ? (
            <>
              {/* <li className="nav-item">
                <a className="nav-link active" aria-current="page" style={{ color: "white" }} href="#">
                  Register
                </a>
              </li> */}
              {/* <li className="nav-item">
                <a className="nav-link" style={{ color: "white" }} href="#">
                  Login
                </a>
              </li> */}
            </>
          ) : (
            
            <li className="nav-item">
              <div style={{display:'flex'}}>
              {userData && (
              <button
                className="nav-link"
                style={{ color: "white", background: "none", border: "none", cursor: "pointer" }}
                onClick={handleMyAppointment}
              >
                My Appointments
              </button>
              )}
              {saloonData && (
              <button
                className="nav-link"
                style={{ color: "white", background: "none", border: "none", cursor: "pointer" }}
                onClick={handleMyHistory}
              >
                My History
              </button>
              )}
              <button
                className="nav-link"
                style={{ color: "white", background: "none", border: "none", cursor: "pointer" }}
                onClick={handleLogout}
              >
                Logout
              </button>
              </div>
            </li>
          )}
        </ul>
      </nav>
    </div>
  );
}

export default ButtonAppBar;
