import React from 'react'
import './Navbar.css'
// import Cart from '../Cart/Cart'
// import SignIn from '../Signin/Signin'
import { BiCartAlt, BiUser } from 'react-icons/bi';
import VarreLogo from '../../images/Varre-Logo.png'

const Navbar = () => {
  return (
    <div>
      <div className="navbar">
        
      
        <div className="navbar-left">
          <a href="">SHOP</a>
          <a href="">EXPLORE</a>
        </div>

        <div className="navbar-center">
          <img className="logo" src={VarreLogo} alt="logo" width="50%"/>
        </div>
        
        <div className="navbar-right">
           <a href=""><BiUser /> SIGN IN</a>
          <a href=""><BiCartAlt/> CART</a>

        </div>


      </div>
        
    </div>
  )
}

export default Navbar
