import './Logo.css'

import React from 'react'
import Tilt from 'react-parallax-tilt';
import brain from './brain64.png'

const Logo = () => {
    return (
        <Tilt className='parallax-effect ma4 mt0'>
            <div className='inner-element'>
                <img src={brain} alt="brain" />
            </div>
        </Tilt>
    )
}

export default Logo
