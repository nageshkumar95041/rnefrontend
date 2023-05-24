import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react'

function Navbar1() {
  const [isMobile,setIsMobile]=useState(true)
  return (
    <>
        <nav>
        <div className="logo"> <Link to="/">RNE  Service </Link> </div>
        <input type="checkbox" name="" id="click"/>
        <label className="menu-btn"for="click"><i className="fas fa-bars"></i> </label>

        <ul>

            <li><Link className="active menu-link"  to="/">Home</Link></li>
            <li><Link to="/service" className='menu-link'>Our Services</Link></li>
            <li><Link to="/find" className='menu-link'>Find-Service</Link></li>
            <li><Link to="/register" className='menu-link'>Register for job</Link></li>
            <li><Link to="/about" className='menu-link'>About Us</Link></li>
            <li><Link to="/contact" className='menu-link'>Contact Us</Link></li>
            <li><Link to="/login" className='menu-link'>Login</Link></li>
            <li><Link to="/userSignup" className='menu-link'>User Signup</Link></li>
            <li><Link to="/adminPage" className='menu-link'>Admin</Link></li>

        
        
        
        </ul>
    </nav>
    </>
  )
}

export default Navbar1