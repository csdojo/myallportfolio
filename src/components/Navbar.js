import React from 'react';
import {Link, NavLink} from 'react-router-dom';
import './navstyle.css'

const Navbar = props => {
  return (
    <nav className="navbar nav-pills navbar-expand-lg">
      <Link 
        className="navbar-brand" 
        to="/">
        Apps
      </Link>
      <ul className="nav">
        <li className="nav-item">
          <NavLink 
            className={`nav-link  ${window.location.pathname === "/about" ? "" : ""}`} 
            to="/about">
            About Me
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink 
            className={`nav-link  ${window.location.pathname === "/projects" ? "" : ""}`} 
            to="/projects">
            Projects
          </NavLink>
        </li>

        <li className="email">
            <div className="nav-link">email me: csdojo9@gmail.com</div>
        
        </li>
        {/* <li className="nav-item">
          <NavLink 
            className={`nav-link text-info ${window.location.pathname === "/movie" ? "text-danger" : ""}`} 
            to="/movie">
            Movie Vote App
          </NavLink>
        </li> */}
      </ul>
    </nav>
  )
}

export default Navbar;
