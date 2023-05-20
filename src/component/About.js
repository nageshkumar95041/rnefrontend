import React from 'react'
import { Navigate, useNavigate } from 'react-router-dom'
import img1 from "../image/footer-img.jpg"
function About() {
  const navigate=useNavigate()
  const service=()=>{
    navigate("/service")
  }
  return (
    <div className='about-container'>
      <div className="about-content">
        <h1>We are online service provider</h1>
        <p> <h3>Welcome to</h3><span>RNE SERVICE</span>,<h3></h3> your trusted local service provider. With years of experience in the industry, we take pride in delivering high-quality services to our valued customers.</p>
        <button className='service-btn' onClick={service}>Our Services</button>
      </div>
      <div className="col-lg-12 col-lg-offset-1 about-footer">
       <h3 className='about-us'>About us</h3>
        <div className="col-lg-3">
          <p>Our local service web apps provide a convenient and efficient platform for connecting customers with local service providers. We simplify the process of finding and hiring reliable professionals for various services. Our user-friendly platform allows you to browse categories, search and filter providers, view profiles and reviews, request services, and make secure payments. We prioritize convenience, trusted professionals, a great user experience, and excellent customer support. Choose us to easily find and book the services you need in your area.</p>
        </div>
        <div className="col-lg-3">
         <img className='img-responsive img-footer' src={img1} alt="image" />
        </div>
        <div className="col-lg-3">
        <h3>Our Mission</h3>
          <p>At our local service web apps, our mission is to streamline the process of finding and hiring local service providers. We understand that searching for reliable professionals can be time-consuming and frustrating. That's why we've created a user-friendly platform that simplifies the entire process, allowing you to find the right service provider quickly and effortlessly.</p>
        </div>
      </div>
    </div>
  )
}

export default About