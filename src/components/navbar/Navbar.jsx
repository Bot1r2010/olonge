import React from 'react'
import "./navbar.scss";
import logo from '../img/logo.png'; 

export const Navbar = () => {
  return (
    <div className='navbar'>

        <div className="navbar__box">

            <div className="navbar__imges">

                <img src={logo} alt="" className="navbar__img" />

            </div>

            <ul className="navbar__ul">

                <li className="navbar__li">

                    <a href="#" className="navbar__a">Home</a>

                </li>

                <li className="navbar__li">

                    <a href="#" className="navbar__a">Product</a>

                </li>

                <li className="navbar__li">

                    <a href="#" className="navbar__a">Faq</a>

                </li>

                <li className="navbar__li">

                    <a href="#" className="navbar__a">Contact</a>

                </li>

            </ul>

        </div>
      
    </div>
  )
}
