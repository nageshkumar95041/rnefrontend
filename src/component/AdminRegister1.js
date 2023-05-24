import React from 'react'
import axios  from 'axios'
import { useState } from 'react'
import LoadingSpinner from './LoadingSpinner'

export default function AdminRegister() {
    const [preloader,setPreloader]=useState(false)
    const [isLoading, setIsLoading] = useState(false);
    const [user,setUser]=useState({
       name:"",
       email:"",
       userName:"",
       password:'',
       confirmPassword:""
       
   
    })
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
           else if(!user.password){
               alert("please fill the password field")
           }
           else if(user.password !== user.confirmPassword){
            alert("password do not match")
           }
          
           
          
            else{
               
               
                setIsLoading(true)
            axios.post("https://rneservices.onrender.com/adminRegistration",{name:user.name,userName:user.userName,email:user.userName,password:user.password}).then((res)=>{
                   setUser({...user,name:"",userName:"",email:"",password:"",confirmPassword:""})
                   setIsLoading(false)
                   if(res.data.type){
                    alert(`Congrats ! registration successful`)
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
   
       
       <div className="contact-container">
       {isLoading &&<LoadingSpinner/>}
       <div className="col-lg-4 register contact1">
       
       <form action='' onSubmit={submitHandler}>
       <h4 className='text-center'>Admin Signup</h4>
           <div className="form-group">
               <label htmlFor="name">Name</label>
               <input type="text"  autoComplete='off' className='form-control' name="name" id="name" value={user.name} onChange={onChange} />
           </div>
      
           <div className="form-group">
               <label htmlFor="userName">UserName</label>
               <input type="text"  autoComplete='off'  className='form-control'name="userName" id="userName" value={user.userName} onChange={onChange} />
           </div>
           <div className="form-group">
               <label htmlFor="email">Email</label>
               <input type="email"  autoComplete='off'  className='form-control'name="email" id="email" value={user.email} onChange={onChange} />
           </div>
           <div className="form-group">
               <label htmlFor="password">Password</label>
               <input type="password"  autoComplete='off'  className='form-control'name="password" id="password" value={user.password} onChange={onChange} />
           </div>
           <div className="form-group">
               <label htmlFor="confirmPassword">Confirm password</label>
               <input type="password"  autoComplete='off'  className='form-control'name="confirmPassword" id="confirmPassword" value={user.confirmPassword} onChange={onChange} />
           </div>
         
   
           <div className="form-group">
               <input type="submit" value="Signup" className='form-control submit-btn' />
           </div>
       </form>
   </div>
   <div className=" col-lg-12 footer">
           <div className="col-lg-2 ">
            
            <i class="fas fa-briefcase event-manager-icon"></i>
            <p>123 job Offers</p>
           </div>
           <div className="col-lg-2 ">
            <span className='glyphicon glyphicon-headphone'></span>
            <i class="fas fa-bolt electrician-icon"></i>
            <p>Electrician</p>
            <p>123 job Offers</p>
           </div>
           <div className="col-lg-2 ">
            <i class="fas fa-wrench plumber-icon"></i>
            <p>123 job Offers</p>
           </div>
           <div className="col-lg-2 ">
           <i class="fas fa-tools carpenter-icon"></i>
            <p>Carpenter</p>
            <p>123 job Offers</p>
           </div>
           <div className="col-lg-2 ">
           <i class="fas fa-utensils cook-icon"></i>
            <p>Cook</p>
            <p>123 job Offers</p>
           </div>
           <div className="col-lg-2 ">
           
          <i class="fas fa-paint-roller painter-icon"></i>
            <p>Painter</p>
            <p>123 job Offers</p>
           </div>
           
          
        </div>
    </div>
   </>
     )
   }