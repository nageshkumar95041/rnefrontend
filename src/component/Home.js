import React from 'react'
import womanImg from "../image/womanImg.png"
import "../App.css"
import { Navigate ,useNavigate} from 'react-router-dom'

function Home() {
 const navigate=useNavigate()
 const discoverNow=()=>{
  navigate("/find")
 }
  return (
    <div>
        <div className="col-lg-4 col-lg-offset-1 home-content">
           <h2 className='heading'>Find out  <span>talented  <br/>Service Provider</span>  with better <br/>review faster</h2>
           <p>"Our local service provider offers a wide range of reliable solutions, delivering top-notch quality and exceptional customer service. Trust us for all your needs, as we strive to exceed expectations and enhance your local community."</p>

           <div className="btn-container">
           <button className='btn btn-primary btn-left' onClick={discoverNow}>Discover Now</button></div>
        </div>
        <div className="col-lg-6 home-img">
          <img src={womanImg} alt="img" className='img-responsive' />
        </div>
        {/* <div className="footer-heading">
            <h2>Popular Category</h2>
        </div> */}
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

export default Home