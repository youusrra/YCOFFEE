import React from 'react'
import { PiCoffeeFill } from "react-icons/pi";

const SubHeading = ({ title }) => {
  return (
    <div style={{ marginBottom: '1rem' }}>
        <p className='p__cormorant'>{title}</p>
        <PiCoffeeFill style={{color: '#c39a7a', marginTop: '5px'}}/>
    </div>
  )
}

export default SubHeading
