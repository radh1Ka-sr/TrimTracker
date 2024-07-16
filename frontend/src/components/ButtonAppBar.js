import React from 'react';

const ButtonAppBar = () => {
  return (
    <div>
       <nav class="navbar " data-bs-theme="dark" style={{backgroundColor:"Black"}}>
        <ul className="nav">
  <li className="nav-item">
    <a className="nav-link active" aria-current="page" style={{color:"white"}} href="#">Home</a>
  </li>
</ul>
<ul className="nav justify-content-end">
  <li className="nav-item">
    <a className="nav-link active" aria-current="page"style={{color:"white"}} href="#">Register</a>
  </li>
  <li className="nav-item">
    <a className="nav-link" style={{color:"white"}} href="#">Login</a>
  </li>
</ul>
</nav>
    </div>
  );
}

export default ButtonAppBar;
