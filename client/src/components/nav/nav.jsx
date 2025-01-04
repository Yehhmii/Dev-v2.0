import React from 'react';
import './nav.css';
import logo from '../../images/logo.png'
import envelope from '../../images/envelope-at.svg'
import telephone from '../../images/telephone.svg'
import { Link } from 'react-router-dom'


export default function nav() {

  return (
    <div>
        <div className='upperNavContainer'>
            <div className='logo'>
                <Link to='/'>
                    <img src={logo} alt="Dev logo" />
                </Link>
            </div>
            <div className='upperIcons'>
                <div className='upperphone'>
                    <img src={telephone} alt="envelope icon" /><h3>+2348158619466</h3>
                </div>
                <div className='upperemail'>
                    <img src={envelope} alt="telephone icon" /><h3>yehhmiihithub@gmail.com</h3>
                </div>
            </div>
        </div>
    </div>
  )
}
