import React, { useEffect, useState } from 'react'
import axios from "axios"
import { Params } from 'react-router-dom';
import { useParams,useNavigate } from 'react-router-dom'
import "../App.css"


export default function Dashboard() {
  
   const [data,setdata]=useState([]);
   const [data1,setdata1]=useState([]);
   const [user,setuser]=useState("");
   const [mess,setmess]=useState([]);
   
   const [count,setCount]=useState("")
   const params=useParams();
   
   const navigate=useNavigate()
     

      const getData=()=>{
        axios.get("https://rneservices.onrender.com/serviceManRegister").then((res)=>{
          setdata(res.data);
        })
       }
       const getData1=()=>{
        axios.get("https://rneservices.onrender.com/userRegistered").then((res)=>{
          setdata1(res.data);
        })
       }
       const getmess=()=>{
        axios.get("https://rneservices.onrender.com/contactMessage").then((res)=>{
          setmess(res.data);
        })
       }
       const getDatauser=()=>{
        axios.get("https://rneservices.onrender.com/usercount").then((res)=>{
          setuser(res.data);
        })
       }
       const getCount=()=>{
        axios.get("https://rneservices.onrender.com/serviceManCount").then((res)=>{
          setCount(res.data);
          
        })
       }
    
    
    
    const deleteHandle=(data)=>{
     console.log(data);
      axios.delete(`https://rneservices.onrender.com/serviceManRegister/${data}`).then(res=>console.log("user deleted successfully")).catch(error=>console.log(error));
      window.location.reload()
      alert("Serviceman deleted successfully");
      
    }
    const deleteuserHandle=(data)=>{
     console.log(data);
      axios.delete(`https://rneservices.onrender.com/userRegistered/${data}`).then(res=>console.log("user deleted successfully")).catch(error=>console.log(error));
      window.location.reload()
      alert("user deleted successfully");
      
    }
  

   
 
   
   

 

   useEffect(()=>{
   getData()
   getData1()
   getCount()
   getDatauser()
   getmess()
   
   },[])
  
  return (


    <div>
        <div className="col-lg-12 dashboard"  >
            <div className="col-lg-2 dashboard-card">
                <span className='glyphicon glyphicon-user'></span>
                <div>  <span className='number'>{count}</span> </div>
                <div>   <span className='service-man'>Service-Man</span>  </div>
                
            </div>
            <div className="col-lg-2 dashboard-card">
                <span className='glyphicon glyphicon-user fa fa-users'></span>
                <div>  <span className='number'>{user}</span> </div>
                <div>   <span className='service-man'>Service-User</span>  </div>
                
            </div>
            <div className="col-lg-2 dashboard-card">
                <span className='glyphicon glyphicon-user fa fa-clock-o'></span>
                <div>  <span className='number'>2400</span> </div>
                <div>   <span className='service-man'>Average Time</span>  </div>
                
            </div>
            <div className="col-lg-2 dashboard-card">
                <span className='glyphicon glyphicon-user'></span>
                <div>  <span className='number'>24</span> </div>
                <div>   <span className='service-man'>Logged-In</span>  </div>
                
            </div>
            <div className="col-lg-2 dashboard-card">
                <span className='glyphicon glyphicon-user fa fa-users'></span>
                <div>  <span className='number'>2400</span> </div>
                <div>   <span className='service-man'>Visitors</span>  </div>
                
            </div>
           
          <div className="col-lg-3 ">
            <h3 className='title-service-man'>Registered service-man</h3>
            <hr />
            
            <ol className='service-man-list'>
                
                
                
            {
              data.map((res)=>{
               return(
                <li key={res._id}>{res.name} <span className='service_man_skill'>{res.skill}</span><span className='btn btn-primary'>View</span> <span className='btn btn-danger' onClick={()=>deleteHandle(res._id)}>Delete</span> </li>
               )
              })
            }  
                
            </ol>
            
            
          </div>
          <div className="col-lg-6">
           <h2>Message</h2>
          
           {
            mess.map((res)=>{
              return (
                <div className="box-message col-lg-8 " key={res._id}>
                <p>Name : <span>{res.name}</span></p>
                <p>Email : <span>{res.email}</span></p>
                <span>Message</span>
                <p>{res.userName}</p>
               </div>
              )
            })
           }
          
               
          </div>
          <div className="col-lg-3 ">
            <h3 className='title-service-man'>Registered Service-users</h3>
            <hr />
            
            <ol className='service-man-list'>
            {
              data1.map((res)=>{
               return(
                <li key={res._id}>{res.name} <span className='btn btn-primary'>View</span> <span className='btn btn-danger' onClick={()=>deleteuserHandle(res._id)}>Delete</span> </li>
               )
              })
            }
               
              
                
                
                
                
            </ol>
            
            
          </div>
         
        </div>
    </div>
  )
}
