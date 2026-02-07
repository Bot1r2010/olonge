import React from 'react'
import "./you.scss";
import img from '../../../assets/img/check.png';

export const You = () => {
  return (
    <div className='you'>

      <div className="you__box">

            <img src={img} alt="" className="you__img" />
              
                  <div className="you__text">
                        <h3 className="you__h3">Explore varieties</h3>
                  
                        <h1 className="you__h1">
                          Shop for your favorites
                          meal as e dey hot.
                      </h1>
                  
                      <p className="you__p">
                          Shop for your favorite meals or drinks
                          and enjoy while doing it.
                      </p>
                </div>
      
        </div>
      
    </div>
  )
}
