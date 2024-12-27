import React from 'react'
import './Newsletter.css'
import { SubHeading } from '../../components'

const Newsletter = () => (
    <div className='app__newsletter'>
        <div className='app__newsletter-heading flex__center'>
            <SubHeading title='Newsletter' />
            <h1 className='headtext__cormorant'>Subscribe to Our Newsletter</h1>
            <p className='p__opensans'>And never miss latest Updates!</p>
        </div>

        <div className='app__newsletter-input'>
            <input type="email" placeholder='Enter you e-mail address'/>
            <button className='custom__button'>Subscribe</button>
        </div>
    </div>
)
export default Newsletter
