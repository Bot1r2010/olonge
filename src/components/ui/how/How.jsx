import React from 'react'
import "./how.scss";
import img from '../../../assets/img/creaet.png'

export const How = () => {
  return (
     <div className='how'>

      <h1 className="how__subh1">
        How the app works
      </h1>

      <div className="how__box">
        <img src={img} alt="" className="how__img" />

        <div className="how__text">
          <h3 className="how__h3">Create an account</h3>

          <h1 className="how__h1">Create/login to an existing
              account to get started
          </h1>

          <p className="how__p">An account is created with your email
              and a desired password</p>
        </div>

      </div>
      
    </div>


  )
}
