import React, { useEffect, useState } from 'react'
import profile_img from "../image/womanImg.png"
// import twilio from 'twilio'
import "../App.css"
import axios from 'axios'
import { useParams,useNavigate } from 'react-router-dom'


function Profile() {
 const [data,setData]=useState([])
 const [message,setMessage]=useState("")
 const params=useParams();
 const navigate=useNavigate()
 
 

//  const profileDetail=()=>{
     
//       axios.get(`http://localhost:8000/serviceManRegister/${params.id}`).then((res)=>{setData(res.data)}).catch((err)=>{
//          console.log(err)
//       })
//    }
 const profileDetail=()=>{
     
      axios.get(`http://localhost:8000/serviceManRegister/${params.id}`).then((res)=>
      {
         
         if(res.data.auth==false){
            navigate("/userLogin")
          alert("please login first")
         }
         else{
            
          setData(res.data)
         }
       
         
      }).catch((err)=>{
         console.log(err)
      })
   }


   
   useEffect(()=>{
      profileDetail()
   },[])

   const onChange=(e)=>{
      setMessage(e.target.value)
   }

   const sendMessage=()=>{

      if(!message){
         alert("please enter your name and location")
      }
      else{
         axios.post("http://localhost:8000/sendSmsToServiceMan",{message:message}).then((res)=>{
            if(res.data.message){
               alert("request sent to the serviceman")
   
            }
            else{
               alert("opps ! something went wrong Please try again")
            }
         })
      }
   
   }
   
 
   

  return (
   <>
    <div className="col-lg-12 profile_container ">
     <div className="container offset-1">
        <div className="col-lg-3">
         <div className="img"><img className='img-responsive profile_img' src={data.profile_pic} alt="img" /></div>
         <div className="skill">
            <h3 className='skill_title'>skills</h3>
            <p>{data.skill}</p>
            
            
         </div>
        </div>
        <div className="col-lg-7">
         <div className="name"><h3>{data.name}</h3></div>
         <div className="title"> <h4>{data.skill}</h4></div>
        
         <span className='col-lg-12 rating'>Rating
         <span className=' glyphicon glyphicon-star first-star'></span>
         <span className=' glyphicon glyphicon-star'></span>
         <span className=' glyphicon glyphicon-star'></span>
         <span className=' glyphicon glyphicon-star-empty'></span>
         <span className=' glyphicon glyphicon-star-empty'></span>
         <span>(12000)</span>

         </span>
          
         <span className='about_btn' >About</span>
         <span className='timeLine_btn'>Timeline</span>
         <hr />
         <div className="col-lg-6">
            <h4>User Id</h4>
            <h4>Name</h4>
            <h4>Email</h4>
            <h4>Phone</h4>
            <h4>Profession</h4>
            <form action="" className='form-group'>
              {/* <textarea name="" id="" cols="30" rows="3"></textarea> */}
              <h5>Enter your Name and Work location</h5>
             <textarea required className='form-control'cols="25" rows="3" type="text" name='message' value={message} onChange={onChange} />
            <button className='btn btn-primary' onClick={sendMessage}>Send Request</button>
            </form>
         </div>
         <div className="col-lg-6 user_detail">
          <h4>{data.userName}</h4>
          <h4>{data.name}</h4>
          <h4>{data.email}</h4>
          <h4>6202079108</h4>
          <h4>{data.skill}</h4>
         </div>
        </div>
        
     </div>
    </div>
   </>
  )
}

export default Profile