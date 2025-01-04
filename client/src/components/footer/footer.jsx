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
import { Element } from 'react-scroll';

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
                    <a href="">Home</a>
                    <a href="">About</a>
                    <a href="">Skills</a>
                    
                </div>
            </div>
            <div className='followUs'>
              <h5 className='US'>Follow Us</h5>
              <div className='followContainer'>
                <div className='linkin'><img src={lin} alt="" /></div>
                <div className='linkin'><img src={ig} alt="" /></div>
                <div className='linkin'><img src={fb} alt="" /></div>
                <div className='linkin'><img src={git} alt="" /></div>
              </div>
            </div>
            <Element name='targetContact'>
            <div className='COntact'>
              <h4 className='use'>Contact us</h4>
              <div className='contactInfo changeSvg'>
                <p className='footP'><img src={pointlocation} alt="location" /> 123 Street, Abuja, Nigeria</p>
                <p className='footP'><img src={phone} alt="phone" /> +2348158619465</p>
                <p className='footP'><img src={envelope} alt="envelop" /> yehhmiihithub@gmail.com</p>
              </div>
            </div>
            </Element>

        </div>
        <div className='copyright'>
          <p className='cpp'>Copyright © <span className='cp'>YBK</span>. All Rights Reserved.</p>
          <p className='cpp'>Designed by <span className='cp'>YTech-City</span></p>
        </div>
        
    </div>
  )
}
