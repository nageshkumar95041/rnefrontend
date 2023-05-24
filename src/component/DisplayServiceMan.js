import React, { useState,useEffect } from 'react'
import axios from 'axios'
import "../App.css"
import { Navigate, useParams,useNavigate, Link } from 'react-router-dom'
import LoadingSpinner from './LoadingSpinner'


function DisplayServiceMan() {
  let [data,setData]=useState([]) 
  const [isLoading, setIsLoading] = useState(false);
 
 
  const filterHandler=(service)=>{
   if(service=="/"){
    window.location.reload()
   }
    axios.get(`https://rneservices.onrender.com/serviceCategory/${service}`).then((res)=>{
      setData(res.data)
      
       
       
      })

  }
  const navigate=useNavigate()
 
 
 
  
 
   
   
   const getData=()=>{
    setIsLoading(true)
    axios.get("https://rneservices.onrender.com/serviceManRegister").then((res)=>{setData(res.data)
  setIsLoading(false)})
   }
  useEffect(()=>{
    getData()
    
  
  
   },[])
   
  



  


   

  return (

  <div className="col-lg-12">

<div className="col-lg-2 category">
<h3>Filter by service</h3>
    <button className='btn btn-info' onClick={()=>filterHandler("Web-Developer")}>Web Developer</button>
    <button className='btn btn-info' onClick={()=>filterHandler("Electrician")}>Electrician</button>
    <button className='btn btn-primary' onClick={()=>filterHandler("Event Planner")}>Event Planner</button>
    <button className='btn btn-primary' onClick={()=>filterHandler("Painter")} >Painter</button>
    <button className='btn btn-primary' onClick={()=>filterHandler("Carpenter")}>Carpenter</button>
    <button className='btn btn-primary' onClick={()=>filterHandler("HomeTutor")}>Home Tutor</button>
    <button className='btn btn-primary' onClick={()=>filterHandler("Plumber")}>Plumber</button>
    <button className='btn btn-primary' onClick={()=>filterHandler("Cook")}>Cook</button>
    <button className='btn btn-primary' onClick={()=>filterHandler("/")}>All</button>
   

  </div>
  <div className="col-lg-10">

  {/* {
   data.map((serviceman)=>{
    console.log(serviceman)
   })
  } */}
   { 
    isLoading ===false?
   data.map((user)=>{
      return(
       
        <div className="card col-lg-3" key={user._id}>
     <div className=" profile_pic"><img  className="img-responsive" src={user.profile_pic} alt="Profile_pic"/></div>
     <div className="about">
      <h4 className="contact name">{user.name}</h4>
      <h4 className=" skill">{user.skill}</h4>
       <p className="about-service-man">{user.text}</p>
     </div>
     <div className="media ">
       <h4 className="contact">Contact</h4>
       <i class="fab fa-facebook-f facebook-icon col-lg-2"></i>
       <i class="fab fa-twitter twitter-icon col-lg-2"></i>
       <i class="fab fa-instagram instagram-icon col-lg-2"></i>
       <i className="fab fa-google fa-google google-icon col-lg-2"></i>
       <i class="fab fa-linkedin-in linkedin-icon col-lg-2"></i>
      </div>
      <hr/>
      <div className="userDetail">
      <div className="box col-lg-3 ">
        <p className="col-lg-10">15K</p>
        <p className="col-lg-10">Likes</p>
      </div>
      <div className="box col-lg-3 ">
        <p className="col-lg-10">82</p>
        <p className="col-lg-10">Projects</p>
      </div>
      <div className="box col-lg-3 ">
        <p className="col-lg-10">Rating</p>
        <p className="col-lg-10 rating">4.5</p>
      </div>


      </div>
     
     <div className="button">

      <button className="view-profile" ><Link  to={user._id}>View profile</Link></button> 
        <Link  className="hire-me" to={user._id}>Hire Me</Link>
        

     </div>
    </div>

    
        
      )
     
    }):<LoadingSpinner></LoadingSpinner>

  } 
  </div>

  </div>
  )
}

export default DisplayServiceMan