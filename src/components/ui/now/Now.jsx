import React from 'react'
import "./now.scss";

const Now = () => {
  return (
    <div>
          <div className='now'>
        <div className="now__box">
            <h1 className="now__h1">
                Download the app now.
            </h1> 

            <p className="now__p">
              Available on your favorite store. Start your premium experience now
            </p>       

            <div className="now__button">
                  <a href="https://play.google.com/" target='_block'>
                    <button className='now__btn1'>Playstore</button>
                  </a>

                  <a href="https://www.apple.com/app-store/" target='_block'>
                    <button className='now__btn2'>App store</button>
                  </a>
            </div>
        </div>
    </div>

      
    </div>
  )
}

export default Now
