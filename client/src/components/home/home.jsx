import React from 'react'
import './home.css';
import Nav from '../nav/nav'
import TextAnimation from './textAnimation';
import DevPicture from '../../images/profile.jpeg'
import NavPopups from './navPopups';

export default function home() {
  return (
    <div className='homeContainer'>
        <div>
          <Nav />
        </div>
        <div className='TextImgContainer'>
          <div className='hometext'>
            <div className='textDivs'>
              <h2>Hi, Meet</h2>
              <h3>Francisco Abhulimen</h3>
              <p>A Progressive</p>
            </div>
            <div>
              <TextAnimation />
            </div>
          </div>
          <div className='homeImg'>
            <img src={DevPicture} alt="Developers image" />
          </div>
        </div>
        <div>
          <NavPopups />
        </div>
    </div>
  )
}
