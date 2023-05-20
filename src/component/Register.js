import React from 'react'
import { useState } from 'react'
import "../App.css"
import LoadingSpinner from './LoadingSpinner'
const axios=require('axios')

function Register() {

    const [preloader,setPreloader]=useState(false)
    const [isLoading, setIsLoading] = useState(false);
 const [user,setUser]=useState({
    name:"",
    userName:"",
    email:"",
    skill:"",
    image:"",
    text:"",
    password:""
    

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
            alert("please fill the password")
        }
        else if(!user.skill){
            alert("please fill the skill field")
        }
        else if(!user.text){
            alert("please write about your")
        }
        else if(!user.image){
            alert("please select image")
        }
        
       
         else{
            let formData=new FormData()
            formData.append('image',user.image)
            formData.append('name',user.name)
            formData.append('userName',user.userName)
            formData.append('email',user.userName)
            formData.append('skill',user.skill)
            formData.append('text',user.text)
            formData.append('password',user.password)
            setIsLoading(true)
            setPreloader(true)
            axios.post("http://localhost:8000/serviceManRegister",formData).then((res)=>{
                setUser({...user,name:"",userName:"",email:"",skill:"",image:"",text:"",password:""})
                
                alert("Registration successful")
                setIsLoading(false)
            setPreloader(false)
              }).catch((err)=>{
                 console.log(err)
              })
             
             
        }   
     

        
     
    }
  return (
      <div className="register-container">
    {isLoading &&<LoadingSpinner/>}

    <div className="col-lg-4 register">
    
    <form action='' onSubmit={submitHandler}>
        <div className="form-group">
            <label htmlFor="name">Name</label>
            <input type="text"  autoComplete='off' className='form-control' name="name" id="name" value={user.name} onChange={onChange} />
        </div>
        <div className="form-group">
            <label htmlFor="userName">userName</label>
            <input type="text"  autoComplete='off'  className='form-control' name="userName" id="userName" value={user.userName} onChange={onChange} />
        </div>
        <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email"  autoComplete='off'  className='form-control'name="email" id="email" value={user.email} onChange={onChange} />
        </div>

        {/* <div class="form-group">
  <label for="sel1">Select list:</label>
  <select class="form-control" id="sel1">
    <option>1</option>
    <option>2</option>
    <option>3</option>
    <option>4</option>
  </select>
</div> */}


        <div className="form-group">
            <label htmlFor="skill">Skill</label>
            <select value={user.skill} onChange={onChange} name="skill" id="skill" className='form-control' >
            <option >Select skill</option>
            <option value="webDeveloper">Event Planner</option>
            <option value="carpenter">Car painter</option>
            <option value="painter">Painter</option>
            <option value="electrician">Electician</option>
            <option value="cook">Cook</option>
            <option value="rajMistri">Raj-mistri</option>
            <option value="carDriver">Caterers</option>
            <option value="homeTutor">Home tutor</option>
            <option value="homeTutor">Plumber</option>
            </select>
            {/* <input type="text" className='form-control' name="skill" id="skill" value={user.skill} onChange={onChange} /> */}
        </div>
        <div className="form-group">
            <label htmlFor="profile_pic">Upload profile</label>
            <input type="file" accept='image/*' className='form-control' name="image" id="profile_pic"  onChange={onChange} />
        </div>

        <div className="form-group">
            
            <textarea  className='textarea'  name="text" id="userName" placeholder='Write about you'  value={user.text} onChange={onChange} ></textarea>
           
        </div>

        <div className="form-group">
            <label htmlFor="password">Password</label>
            <input type="password" className='form-control' name="password" id="password" value={user.password} onChange={onChange} />
        </div>
       
        <div className="form-group">
            <input type="submit" value="Submit" className='form-control submit-btn' />
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
    
  )
}

export default Register