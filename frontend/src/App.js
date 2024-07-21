
import './App.css';
import ButtonAppBar from './components/ButtonAppBar';
import Home from './components/Home';
import SaloonRegister from './components/saloon/SaloonRegister';
import SaloonLogin from './components/saloon/SaloonLogin';
import SaloonHome from './components/saloon/SaloonHome';
import History from './components/saloon/History';
import UserRegister from './components/user/UserRegister';
import UserLogin from './components/user/UserLogin';
import UserHome from './components/user/UserHome';
import MyHistory from './components/user/MyHistory';
import AddAppointment from './components/user/AddAppointment';
import MyAppointment from './components/user/MyAppointment';
import MyProfile from './components/user/MyProfile';
import Saloon from './components/user/Saloon';
import React,{useState} from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProfileSaloon from './components/saloon/ProfileSaloon';


function App() {
  return (
    < >
      <BrowserRouter>
   <ButtonAppBar/>
   
   <Routes>
    <Route exact path="/" element={<Home/>}/>
    <Route exact path="/saloonRegister" element={<SaloonRegister/>} />
    <Route exact path="/saloonLogin" element={<SaloonLogin/>}/>
    <Route exact path="/saloonHome" element={<SaloonHome/>}/>
    <Route exact path="/saloonHistory" element={<History/>}/>
    
    <Route exact path="/userRegister" element={<UserRegister/>} />
    <Route exact path="/userLogin" element={<UserLogin/>}/>
    <Route exact path="/userHome" element={<UserHome/>}/>
    <Route exact path="/userHistory" element={<MyHistory/>}/>
    <Route exact path="/userAddAppointment/:saloonId" element={<AddAppointment/>} />
    <Route exact path="/userMyAppointment" element={<MyAppointment/>}/>
    <Route exact path="/userMyProfile" element={<MyProfile/>}/>
    <Route exact path="/userSaloon" element={<Saloon/>}/>
    <Route exact path="/saloonProfile" element={<ProfileSaloon/>} />
    
    <Route/> 
   </Routes>
   
   </BrowserRouter>
    </>
  );
}

export default App;
