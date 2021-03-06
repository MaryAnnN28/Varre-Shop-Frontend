import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'
import VarreLogo from '../../images/Varre-Logo.png'

const Navbar = () => {
  return (
    <div>
      <div className="navbar">
      
        <div className="navbar-left">
          <Link to='/shop'> SHOP</Link>
          <Link to='/explore'> EXPLORE</Link>
        </div>

        <div className="navbar-center">
          <Link to='/'><img className="logo" src={VarreLogo} alt="logo" width="50%"/></Link>
        </div>
        
        <div className="navbar-right">
          <Link to='/login'>LOG IN</Link>
          <Link to='/cart'>CART</Link>
  

        </div>


      </div>
        
    </div>
  )
}

export default Navbar
