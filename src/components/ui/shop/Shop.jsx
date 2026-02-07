import React from 'react'
import "./shop.scss";
import img from '../../img/shop.png';

export const Shop = () => {
  return (

     <div className='shop'>

              <div className="shop__box">
        
                <div className="shop__text">
                  <h3 className="shop__h3">Explore varieties</h3>
        
                  <h1 className="shop__h1">
                    Shop for your favorites
                    meal as e dey hot.
                  </h1>
        
                  <p className="shop__p">
                    Shop for your favorite meals or drinks
                    and enjoy while doing it.
                  </p>
                </div>

                 <img src={img} alt="" className="shop__img" />
        
              </div>
    </div>

  )
}
