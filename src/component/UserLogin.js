import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
import LoadingSpinner from './LoadingSpinner'


import "../App.css"
const axios=require('axios')

axios.defaults.withCredentials = true

function UserLogin() {
    const [isLoading, setIsLoading] = useState(false);
    const navigate=useNavigate()
 const [user,setUser]=useState({
   
    userName:"",
    
    password:""

 })
    const onChange=(e)=>{
    const name=e.target.name
    const value=e.target.value
     setUser({...user,[name]:value})
    }

    const submitHandler=async(e)=>{
        e.preventDefault()
        
        if(!user.userName){
            alert("Please fill the userName field")
        }
        else if(!user.password){
            alert("Please fill the password field")
        }
        else{

            const {userName,password}=user
            setIsLoading(true)
            axios.post("https://rneservices.onrender.com/userLogin",{userName,password}).then((res)=>{
                setIsLoading(false)
               if(res.data.login===true){
               alert("Login successful")
               navigate("/find")
              
               
               }

               else{
                alert("invalid credential")
               }
              }).catch((err)=>{
                 console.log(err)
              })

           

        }

          
     
     
    }
   
  




      

  
    
  return (
    <>
    <div className="login-container col-lg-12">
    {isLoading &&<LoadingSpinner/>}

     <h3 className='user-login'>User login</h3>
    <div className="col-lg-4 register login">
    <form action='' onSubmit={submitHandler}>
       
        <div className="form-group">
            <label htmlFor="userName">userName</label>
            <input type="text"  autoComplete='off'  className='form-control' name="userName" id="userName" value={user.userName} onChange={onChange} />
        </div>
      
        <div className="form-group">
            <label htmlFor="password">Password</label>
            <input type="password" className='form-control' name="password" id="password" value={user.password} onChange={onChange} />
        <h5>Forgot your password ?</h5>
        </div>
       
        <div className="form-group">
            <input  type="submit" value="Login" className='form-control login-btn' />
        </div>
        <h5>Not a member? <Link to="/userSignup">Signup now</Link></h5>
    </form>
</div>
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

        
</>
  )
}

export default UserLogin