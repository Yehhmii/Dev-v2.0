// import React from 'react'
import './footer.css';
import logo from "../../images/logo.png"
import fb from "../../images/facebook.svg";
import ig from "../../images/instagram.svg";
import lin from "../../images/linkedin.svg";
import git from "../../images/github.svg";
import phone from "../../images/telephone.svg";
import envelope from "../../images/envelope-at.svg"
import pointlocation from "../../images/geo.svg";
import Tiktok from "../../images/tiktok.svg"
import { Element } from 'react-scroll';
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <div>
      <div className='footerContainer'>
        <div className="logo2"> 
                <h1 className="logotext2">
                Hit<span className='spa'>Hub</span>
                </h1>
                <div className="img1">
                <img src={logo} alt="HitHub logo" />
                </div>
            </div>
            <div className='usefulLink'>
                <h4 className='use'>USEFULL LINKS</h4>
                <div className='links'>
                    <a href="/">Home</a>
                    <a href="/about">About</a>
                    <a href="">Skills</a>
                    
                </div>
            </div>
            <div className='followUs'>
              <h5 className='US'>Follow Us</h5>
              <div className='followContainer'>
                <div className='linkin'>
                  <Link to='https://www.linkedin.com/in/abhulimen-francisco-4928a0294?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app'>
                    <img src={lin} alt="" />
                  </Link>
                </div>
                <div className='linkin'>
                  <Link to='https://www.instagram.com/yehhmii/profilecard/?igsh=MXc1NjBwZHZ3ZDlqZw=='>
                    <img src={ig} alt="" />
                  </Link>
                </div>
                <div className='linkin'>
                  <Link to='https://www.tiktok.com/@yehhmiicapguy?_t=ZM-8spD2HQzx25&_r=1'>
                    <img src={Tiktok} alt="" />
                  </Link>
                </div>
                <div className='linkin'>
                  <Link to='https://github.com/Yehhmii'>
                    <img src={git} alt="" />
                  </Link>
                </div>
              </div>
            </div>
            <Element name='targetContact'>
            <div className='COntact'>
              <h4 className='use'>Contact us</h4>
              <div className='contactInfo changeSvg'>
                <p className='footP'><img src={pointlocation} alt="location" /> 123 Street, Abuja, Nigeria</p>
                <p className='footP'><img src={phone} alt="phone" /> +2348158619465</p>
                <a href="mailto:yehhmiihithub@gmail.com" style={{ textDecoration: 'none', color: 'inherit' }}>
                <p className='footP'><img src={envelope} alt="envelop" /> yehhmiihithub@gmail.com</p>
                </a>
              </div>
            </div>
            </Element>

        </div>
        <div className='copyright'>
          <p className='cpp'>Copyright © <span className='cp'>YBK</span>. All Rights Reserved.</p>
          <p className='cpp'>Designed by <span className='cp'>YTexh-City 2024</span></p>
        </div>
        
    </div>
  )
}
