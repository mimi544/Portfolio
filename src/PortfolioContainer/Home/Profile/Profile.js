import React from 'react'
import Typewriter from 'typewriter-effect';

import './profile.css'

export default function  () {
  return (
    <div className='profile-container'>
        <div className='profile-parent'>
            <div className='profile-details'>
                <div className='colz'>
                    <div className='colz-icon'>
                        <a href='https://www.instagram.com/i.am.sohini/'>
                            <i className="fa-brands fa-instagram"></i>
                        </a>
                        <a href=''>
                            <i className="fa-brands fa-twitter"></i>
                        </a>
                        <a href='https://www.linkedin.com/in/sohini-sen-96ab951a2/'>
                            <i className="fa-brands fa-linkedin"></i>
                        </a>
                        <a href='https://github.com/mimi544'>
                            <i className="fa-brands fa-github"></i>
                        </a>
                    </div>
                </div>
                <div className='profile-details-name'> 
                    <span className='primary-text'>
                        {""}
                        Hello, I Am <span className='highlighted-text'> SOHINI SEN</span>
                    </span>
                </div>
                <div className='profile-details-role'>
                <span className='primary-text'>
                        {""}
                        <h1>
                            {""}
                            <Typewriter
                                options={{
                                    strings: ['Fresher 💻', 'Web-developer 🌐'],
                                    cursor: ['....'],
                                    autoStart: true,
                                    loop: true,
                                }}
                            />
                        </h1>
                        <span className='profile-role-tagline'>
                            Searching For Job At Webdevelopment Field
                        </span>
                    </span>
                </div>
                <div className='profile-options'>
                    <button className='btn primary-btn'>
                        {""}
                        Hire Me{""}
                    </button>
                    <a href='SOHINI_SEN_8240150887.pdf' download='SOHINI_SEN_8240150887.pdf'>
                        <button className='btn highlighted-btn'>Get Resume</button>
                    </a>
                </div>
            </div>
            <div className='profile-picture'>
                <div className='profile-picture-background'>

                </div>
            </div>
        </div>
    </div>
  )
}
