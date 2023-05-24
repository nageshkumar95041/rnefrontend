import React from 'react'
import { useState } from 'react'

import img1 from "../image/pexels-caio-56759.jpg"
import img2 from "../image/pexels-gustavo-fring-4254165.jpg"
import img3 from "../image/pexels-total-shape-2383010.jpg"
import LoadingSpinner from './LoadingSpinner'
import "../App.css"
const axios=require('axios')

function Contact() {

    const [isLoading,setIsLoading]=useState(false)
 const [user,setUser]=useState({
    name:"",
    email:"",
    userName:"",
    

 })
    // const onChange=(e)=>{
    // const name=e.target.name
    // const value= name==='image'? e.target.files[0]:e.target.value
    //  setUser({...user,[name]:value})
    // }

    const onChange=(e)=>{
        const name=e.target.name
        const value= name==='image'? e.target.files[0]:e.target.value
         setUser({...user,[name]:value})
        }

    const submitHandler=async(e)=>{
        e.preventDefault()
        
        if(!user.name){
            alert("please fill the name field")
        }
        else if(!user.userName){
            alert("please fill the userName field")
        }
        else if(!user.email){
            alert("please fill the email field")
        }
       
        
       
         else{
            // let formData=new FormData()
           
            // formData.append('name',user.name)
            // formData.append('email',user.email)
            // formData.append('userName',user.userName)
            

            // axios.post("http://localhost:8000/contactmessage",formData).then((res)=>{
            //     setUser({...user,name:"",email:"",userName:""})
            //     setPreloader(true)
            //     alert("Registration successful")
            //   }).catch((err)=>{
            //      console.log(err)
            //   })
               setIsLoading(true)
              axios.post("https://rneservices.onrender.com/contactmessage",{name:user.name,email:user.email,userName:user.userName}).then((res)=>{
                setUser({...user,name:"",email:"",userName:""})
                setIsLoading(false)
                if(res.data.type){
                 alert(`data submitted successfully ! we will contact you shortly.`)
                }
                else{
                   alert("opps ! something wrong please try again")
                }
              }).catch((err)=>{
                 console.log(err)
              })
             
             
        }   
     

        
     
    }
  return (

    <>

    
    <div className="register-container">
    {isLoading &&<LoadingSpinner/>}
    <div className="col-lg-4 register contact1">
    <h3 className='text-center'>Contact Us</h3>
    <form action='' onSubmit={submitHandler}>
        <div className="form-group">
            <label htmlFor="name">Name</label>
            <input type="text"  autoComplete='off' className='form-control' name="name" id="name" value={user.name} onChange={onChange} />
        </div>
   
        <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email"  autoComplete='off'  className='form-control'name="email" id="email" value={user.email} onChange={onChange} />
        </div>
        <div className="form-group">
            <label htmlFor="userName">Message</label>
            <textarea name="userName" id="userName" value={user.userName} onChange={onChange} cols="70" rows="5"></textarea>
           
        </div>

        <div className="form-group">
            <input type="submit" value="Contact" className='form-control submit-btn' />
        </div>
    </form>
</div>

    </div>
</>
  )
}

export default Contact