import React from 'react'
import "./fotter.scss";
import logo from '../img/logo.png'
import { FaTwitter, FaFacebook, FaInstagram } from "react-icons/fa";


const Fotter = () => {
  return (
    <div className='fotter'>
        <div className="fotter__box">
            <img src={logo} alt="" />

                    <div className="fotter__icon">
            <a href="https://x.com/?lang=ru" target='_block' rel="noreferrer">
              <FaTwitter className='fotter__f'/>
            </a>
            
            <a href="https://www.facebook.com/?locale=ru_RU" target='_block' rel="noreferrer">
              <FaFacebook className='fotter__f'/>
            </a>

            <a href="https://www.instagram.com/" target='_block' rel="noreferrer">
               <FaInstagram className='fotter__f'/>
            </a>   
        </div>

        <h5 className="h5">Copywright 2020 Bella Onojie.com</h5>
        </div>



    </div>
  )
}

export default Fotter
