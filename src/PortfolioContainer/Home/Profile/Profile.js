import React from 'react'
import Typical from 'react-typical'
import './profile.css'

export default function  () {
  return (
    <div className='profile-container'>
        <div className='profile-parent'>
            <div className='profile-details'>
                <div className='colz'>
                    <div className='colz-icon'>
                        <a href='https://www.instagram.com/i.am.sohini/'>
                            <i class="fa-brands fa-instagram"></i>
                        </a>
                        <a href=''>
                            <i class="fa-brands fa-twitter"></i>
                        </a>
                        <a href='https://www.linkedin.com/in/sohini-sen-96ab951a2/'>
                            <i class="fa-brands fa-linkedin"></i>
                        </a>
                        <a href='https://github.com/mimi544'>
                            <i class="fa-brands fa-github"></i>
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
                            <Typical
                               loop={Infinity}
                               steps={[
                                "Fresher 💻",1000,
                                "Web-developer 🌐",1000,
                               ]}
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
