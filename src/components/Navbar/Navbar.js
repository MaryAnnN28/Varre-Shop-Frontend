import React from 'react'
import './Navbar.css'
import Cart from '../Cart/Cart'
import SignIn from '../SignIn/Signin'
import { BiCartAlt, BiUser } from 'react-icons/bi';

const Navbar = () => {
  return (
    <div>
      <div className="navbar">
        
      
        <div className="navbar-left">
          <a href="">SHOP</a>
          <a href="">EXPLORE</a>
        </div>

        <div className="navbar-center">
            <h1 className="logo-header">Varre</h1>
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
