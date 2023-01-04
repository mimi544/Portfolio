import React from 'react'
import Typical from 'react-typical'

export default function  () {
  return (
    <div className='profile-container'>
        <div className='profile-parent'>
            <div className='profile-details'>
                <div className='colz'>
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
                                "Fresher 😃",1000,
                                "Fresher 2 😃",1000,
                               ]}
                            />
                        </h1>
                    </span>
                </div>
            </div>
        </div>
    </div>
  )
}
