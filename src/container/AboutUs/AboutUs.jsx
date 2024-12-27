import React from 'react'
import './AboutUs.css'
import { images } from '../../constants'
import { PiCoffeeFill } from "react-icons/pi";

const AboutUs = () => (
  <div className='app__aboutus app__bg flex__center section__padding' id='about'>
    <div className='app__aboutus-content flex__center'>

      <div className='app__aboutus-content_about'>
        <h1 className='headtext__cormorant'>Our Coffee Story</h1>
        <PiCoffeeFill style={{color: '#c39a7a'}}/>
        <p className='p__opensans'>At ycoffee, we source the finest beans from around the world to craft a blend that speaks to your senses. Our journey is fueled by passion, precision, and the love of coffee.</p>
        <button type='button' className='custom__button'>Know More</button>
      </div>

    <div className='app__aboutus-content_bg flex__center'>
      <img src={images.bgCoffee} alt="about_coffee" />
    </div>


      <div className='app__aboutus-content_passion'>
        <h1 className='headtext__cormorant'>Crafted With Passion</h1>
        <PiCoffeeFill style={{color: '#c39a7a'}}/>
        <p className='p__opensans'>From hand-picked beans to the perfect roast, every step of our process is designed to deliver an unparalleled coffee experience. We invite you to savor the art of coffee in every sip.</p>
        <button type='button' className='custom__button'>Know More</button>
      </div>
    </div>
  </div>
)

export default AboutUs
