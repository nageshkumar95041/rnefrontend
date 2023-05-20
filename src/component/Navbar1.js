import React from 'react'
import { Link } from 'react-router-dom'

function Navbar1() {
  return (
    <>
        <nav>
        <div className="logo">RNE  Service</div>
        <input type="checkbox" name="" id="click"/>
        <label className="menu-btn"for="click"><i className="fas fa-bars"></i> </label>

        <ul>
            <li><Link className="active" to="/">Home</Link></li>
            <li><Link to="/service">Our Services</Link></li>
            <li><Link to="/find">Find-Service</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li><Link to="/register">Register for job</Link></li>
            <li><Link to="/login">Login</Link></li>
            <li><Link to="/userSignup">User Signup</Link></li>

        
        
        
        </ul>
    </nav>
    </>
  )
}

export default Navbar1