import React from 'react'
import logo from "./image/logo.png";
import "./navbar.css"

const Navbar = () => {
  return (
    <div className='navbar'>
      
        <img src={logo} alt='logo' className='logo-img' />
        <p>My Travel Journal</p>

      
    </div>
  )
}

export default Navbar