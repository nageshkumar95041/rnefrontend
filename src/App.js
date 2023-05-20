import logo from './logo.svg';
import './App.css';
import Navbar from './component/Navbar';
import Home from './component/Home';
import Register from './component/Register';
import Login from './component/Login';
import Contact from './component/Contact';
import About from './component/About';
import Service from './component/Service';
import Profile from "./component/Profile"


import {BrowserRouter as Router,Routes,Route, useParams, BrowserRouter}from "react-router-dom";
import DisplayServiceMan from './component/DisplayServiceMan';
import Dashboard from './component/Dashboard';
import UserSignup from './component/UserSignup';
import UserLogin from './component/UserLogin';
import LoadingSpinner from './component/LoadingSpinner';
import Navbar1 from './component/Navbar1';



function App() {
  return (
    <>
   
   
      <Router>
      <Navbar1/>
      
      
        <Routes>
           
           <Route path='/' element={<Home/>}/>
           <Route path='/service' element={<Service/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/register' element={<Register/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/find' element={<DisplayServiceMan/>}/>
          <Route path='/find/:id' element={<Profile/>}/>
          <Route path='/adminPage' element={<Dashboard/>}/>
          <Route path='/userSignup' element={<UserSignup/>}/>
          <Route path='/userLogin' element={<UserLogin/>}/>
          

        </Routes>
      </Router>

  
      

     
    </>
  );
}

export default App;
