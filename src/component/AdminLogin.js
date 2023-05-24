import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import LoadingSpinner from './LoadingSpinner'


import "../App.css"
const axios=require('axios')

axios.defaults.withCredentials = true

function AdminLogin() {
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
            axios.post("https://rneservices.onrender.com/adminLogin",{userName,password}).then((res)=>{
                setIsLoading(false)
              
               if(res.data.login===true){
               alert("Login successful")
               navigate("/adminPage")
              
               
               }

               else{
                alert("invalid credential")
               }
              }).catch((err)=>{
                 console.log(err)
              })
            

      

        }

          
     
     
    }
    // const submitHandler=async(e)=>{
    //     e.preventDefault()
        
    //     if(!user.userName){
    //         alert("Please fill the userName field")
    //     }
    //     else if(!user.password){
    //         alert("Please fill the password field")
    //     }
    //     else{

    //         const {userName,password}=user
    //         axios.post("http://localhost:8000/login",{withCredentials:true},{userName,password}).then((res)=>{
              
    //            if(res.data.login){
    //            alert("Login successful")
    //            navigate("/find")
               
               
    //            }

    //            else{
    //             alert("invalid credential")
    //            }
    //           }).catch((err)=>{
    //              console.log(err)
    //           })

      

    //     }

          
     
     
    // }
  return (
    <>
    <div className="login-container col-lg-12">

    {isLoading &&<LoadingSpinner/>}
     {/* <h3 className='user-login col-lg-12'>User login</h3> */}
    <div className="col-lg-4 register login">
    <form action='' onSubmit={submitHandler}>
       
        <div className="form-group">
            <label htmlFor="userName">userName</label>
            <input type="text"  autoComplete='off'  className='form-control' name="userName" id="userName" value={user.userName} onChange={onChange} />
        </div>
      
        <div className="form-group">
            <label htmlFor="password">Password</label>
            <input type="password" className='form-control' name="password" id="password" value={user.password} onChange={onChange} />
        </div>
       
        <div className="form-group">
            <input  type="submit" value="Login" className='form-control login-btn' />
        </div>
    </form>
</div>
    </div>
    

        
</>
  )
}

export default AdminLogin