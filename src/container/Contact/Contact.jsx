import React from 'react'
import './Contact.css'
import { SubHeading } from '../../components'
import { images } from '../../constants'

const Contact = () => (
    <div className='app__contact app__wrapper section__padding' id='contact'>
        <div className='app__wrapper-info'>
            <SubHeading title='Contact' />
            <h1 className='headtext__cormorant' style={{marginBottom: '3rem'}}>Find Us</h1>
           <div className='app__wrapper-content'>
           <p className='p__opensans'>Lane Ends Bungalow, Whatcroft Hall Lane, Rudheath, CW9 7SG</p>
           <p className='p__cormorant' style={{color: '#c39a7a', margin: '2rem 0'}}>Opening Hours</p>
           <p className='p__opensans'>Mon - Fri: 10:00 am - 02:00 am</p>
           <p className='p__opensans' style={{marginTop: '0.5rem'}}>Sat - Sun: 10:00 am - 03:00 am</p> 
           </div>
           <button className='custom__button'>Visit Us</button>
        </div>

        <div className='app__contact-img border__container-contact app__wrapper-img'>
            <img src={images.contactCoffee} alt='contact' />
        </div>
    </div>
)

export default Contact
