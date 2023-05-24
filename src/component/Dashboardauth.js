import React from 'react'
import { useState } from 'react'
import axios from "axios"
import { useParams,useNavigate } from 'react-router-dom'
import Dashboard from './Dashboard'
import AdminLogin from './AdminLogin'
function Dashboardauth() {
    const [data,setData]=useState(true)
    const navigate=useNavigate()
    axios.get('https://rneservices.onrender.com/adminPage').then((res)=>
    {
    
       if(res.data.auth){
        setData(true)
       
    }
    else{
          setData(false)
      
       
        }
        
        
      }).catch((err)=>{
        console.log(err)
      })
  return (
    
    <>
        {
         data ? <Dashboard></Dashboard>:<AdminLogin></AdminLogin>

        }
    </>
   
  )
}

export default Dashboardauth