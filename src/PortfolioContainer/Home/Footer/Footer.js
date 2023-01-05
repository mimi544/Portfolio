import React from 'react'
import App from '../../../App'
import './Footer.css'

const bgImage = require('../../../assets/Home/shape-bg.png')

export default function Footer() {
  return (
    <div className='footer-container'>
        <div className='footer-parent'>
            <img src={bgImage} alt='no internetconnections'/>
        </div>
      
    </div>
  )
}
