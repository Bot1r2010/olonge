import React from 'react'
import "./intro.scss";

const Intro = () => {
  return (
    <div className='intro'>

        <div className="intro__box">
            <h2 className="intro__h2">
              Food app
            </h2>

            <h1 className='intro__h1'>
                Why stay hungry when 
                you can order form Bella Onojie
            </h1>

            <p className='intro__p'>Download the bella onoje’s food app now on</p>

            <div className="intro__button">
                  <a href="https://play.google.com/" target='_block'>
                    <button className='intro__btn1'>Playstore</button>
                  </a>

                  <a href="https://www.apple.com/app-store/" target='_block'>
                    <button className='intro__btn2'>App store</button>
                  </a>
            </div>
        </div>
      
    </div>
  )
}

export default Intro
