import React from 'react'
import "../App.css"
import { useNavigate } from 'react-router-dom'


function Service() {
  const style={
    border:"none"
  }
 const navigate=useNavigate();
  const view=()=>{
    navigate("/find")
   }
  return (
    <div>
      <div className="col-lg-12">
        <div className="container service-container" style={style}>
          <h2 className='text-center'>Our services</h2>
          
          <p className="title-para" >  Our local service provider web application aims to connect service   

seekers with reliable and trusted local service providers in their area.  

It provides a convenient and user-friendly platform for users to find  

and hire local service professionals for various needs, such as 

plumbing, electrical work, home repairs, cleaning services, and more. 

 </p>
     
         
          <div className="col-lg-2 card-category">
          <i class="fas fa-wrench plumber-icon1"></i>
            <div className="descrp">
              <h3 className='text-center'>Plumber</h3>
             <p >"Efficient plumbing services for your local community. Our skilled plumbers provide prompt and reliable solutions for all your plumbing needs. Trust us to handle installations, repairs, and maintenance with expertise and professionalism."</p>
             <button className="btn btn-primary view" onClick={view}>View Service</button>
            </div>
          </div>
          <div className="col-lg-2 card-category">
          <span className='glyphicon glyphicon-camera service-icon'></span>
            <div className="descrp">
              <h3 className='text-center'>PhotoGrapher</h3>
             <p>"Capture precious moments with our talented photographer. From weddings to family portraits, our skilled photographer brings creativity and expertise to every shoot. Trust us to preserve your memories with stunning photographs."</p>
             <button className="btn btn-primary view" onClick={view}>View Service</button>
            </div>
          </div>
          <div className="col-lg-2 card-category">
          <i class="fas fa-bolt electrician-icon1"></i>
            <div className="descrp">
              <h3 className='text-center'>Electrician</h3>
             <p>"Dependable electrical services for your local area. Our skilled electricians offer efficient installations, repairs, and maintenance for residential and commercial needs. Contact  us for safe and reliable electrical solutions in your community."</p>
             <button className="btn btn-primary view" onClick={view}>View Service</button>
            </div>
          </div>
          <div className="col-lg-2 card-category">
          <span className='glyphicon glyphicon-user service-icon'></span>
            <div className="descrp">
              <h3 className='text-center'>Home cleaner</h3>
             <p>"Immaculate homes are just a click away. Our trusted local home cleaners deliver thorough and reliable cleaning services. Sit back, relax, and let our professionals transform your space into a spotless haven."</p>
             <button className="btn btn-primary view" onClick={view}>View Service</button>
            </div>
          </div>
          <div className="col-lg-2 card-category">
          <i class="fas fa-tools carpenter-icon1"></i>
            <div className="descrp">
              <h3 className='text-center'>Carpenter</h3>
             <p>"Transform your space with the expertise of our local carpenters. From custom furniture to intricate woodwork, our skilled craftsmen bring your vision to life. Trust us for quality craftsmanship and attention to detail."</p>
             <button className="btn btn-primary view" onClick={view}>View Service</button>
            </div>
          </div>
          <div className="col-lg-2 card-category">
          <i class="fas fa-paint-roller painter-icon1"></i>
            <div className="descrp">
              <h3 className='text-center'  onClick={view}>Painter</h3>
             <p>"Add a splash of color to your world with our local painters. From residential to commercial projects, our skilled painters bring creativity and precision to every brushstroke. Trust us to transform your space with impeccable finishes and vibrant hues."</p>
             <button className="btn btn-primary view">View Service</button>
            </div>
          </div>
          <div className="col-lg-2 card-category">
          <span className='glyphicon glyphicon-cog service-icon'></span>
            <div className="descrp">
              <h3 className='text-center'>Raj Mistri</h3>
             <p>"Build your dreams with our skilled local Rajmistri (master mason). From foundation to structure, our Rajmistris provide expert craftsmanship and construction solutions. Trust us for reliable and quality services, creating sturdy and beautiful structures for your local community."</p>
             <button className="btn btn-primary view"  onClick={view}>View Service</button>
            </div>
          </div>
          <div className="col-lg-2 card-category">
          <i class="fas fa-utensils cook-icon1"></i>
            <div className="descrp">
              <h3 className='text-center'>Cook</h3>
             <p>"Indulge in culinary delights with our talented local cook. From intimate dinners to special events, our skilled cook creates mouthwatering dishes that satisfy every palate. Trust us to deliver exceptional flavors and a delightful dining experience in the comfort of your own home."</p>
             <button className="btn btn-primary view"  onClick={view}>View Service</button>
            </div>
          </div>
          <div className="col-lg-2 card-category">
          <i class="fas fa-chalkboard-teacher tutor-icon1"></i>
            <div className="descrp">
              <h3 className='text-center'>Tutor</h3>
             <p>"Unlock your full academic potential with our dedicated local tutors. From personalized one-on-one sessions to group study sessions, our tutors provide expert guidance and support across various subjects. Trust us to enhance your learning journey and achieve academic success."</p>
             <button className="btn btn-primary view"  onClick={view}>View Service</button>
            </div>
          </div>
          <div className="col-lg-2 card-category">
          
            <i class="fas fa-briefcase event-manager-icon1"></i>

            <div className="descrp">
              <h3 className='text-center'>Event Planner</h3>
             <p>"Create unforgettable moments with our talented talented event planners. From weddings to corporate gatherings, our experienced planners bring your vision to life. Trust us to handle every detail, ensuring a seamless and memorable event that exceeds your expectations."</p>
             <button className="btn btn-primary view"  onClick={view}>View Service</button>
            </div>
          </div>
          <div className="col-lg-2 card-category">
          <span className='glyphicon glyphicon-cog service-icon'></span>
            <div className="descrp">
              <h3 className='text-center'>Caterers</h3>
             <p>"Indulge in a culinary extravaganza with our local caterers. From exquisite platters to delightful desserts, our talented chefs craft delectable menus to tantalize your taste buds. Trust us to deliver exceptional flavors, impeccable presentation, and unparalleled service, ensuring an unforgettable dining experience."</p>
             <button className="btn btn-primary view"  onClick={view}>View Service</button>
            </div>
          </div>
         
          
          
        </div>
      </div>
    </div>
  )
}

export default Service