import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <>
        <nav className="navbar navbar-default">
  <div className="container-fluid">
    <div className="navbar-header">
      <Link className="navbar-brand" to="/">Job-spot</Link>
    </div>
    <ul className="nav navbar-nav">
      <li className=""><Link to="/">Home</Link></li>
      {/* <li className="dropdown">
        <a className="dropdown-toggle" data-toggle="dropdown" href="#">Select-category
        <span className="caret"></span></a>
        <ul className="dropdown-menu">
          <li><Link to="carpenter">Carpenter</Link></li>
          <li><Link to="cook">Cook</Link></li>
          <li><Link to="rajMistri">Raj-Mistri</Link></li>
          <li><Link to="painter">Painter</Link></li>
          <li><Link to="electrician">Electrician</Link></li>
          <li><Link to="plumber">Plumber</Link></li>
          <li><Link to="carDriver">Car-Driver</Link></li>
          <li><Link to="doctor">Doctor</Link></li>
          <li><Link to="Hometutor">Home-Tutor</Link></li>

        </ul>
      </li> */}
      
      <li><Link to="/service">Our Services</Link></li>
      <li><Link to="/find">Find-service</Link></li>
      <li><Link to="/about">About</Link></li>
      <li><Link to="/contact">Contact</Link></li>
    </ul>

    <form className="navbar-form navbar-right" action="/action_page.php">
  <div className="input-group">
    <input type="text" class="form-control" placeholder="Search"/>
    <div className="input-group-btn">
      <button className="btn btn-default" type="submit">
        <i className="glyphicon glyphicon-search"></i>
      </button>
    </div>
  </div>
</form>
    <ul className="nav navbar-nav navbar-right">
      <li><Link to="/register"><span className="glyphicon glyphicon-user"></span>Register for job</Link></li>
      <li><Link to="/login"><span className="glyphicon glyphicon-log-in"></span> Login</Link></li>
      <li><Link to="/userSignup"><span className="glyphicon glyphicon-log-in"></span> User Signup</Link></li>
    </ul>
  </div>
</nav>
    </>
  )
}

export default Navbar