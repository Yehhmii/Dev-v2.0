import React, {useEffect} from 'react'
import './home.css';
import Nav from '../nav/nav'
import TextAnimation from './textAnimation';
import DevPicture from '../../images/profile.jpeg'
import NavPopups from './navPopups';
import Homebtn from './homebtn.jsx';

export default function home() {
  useEffect(() => {
    const img = document.querySelector('.homeImg img');
    const textDivs = document.querySelector('.textDivs');
  
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
          } else {
            entry.target.classList.remove('in-view');
          }
        });
      },
      { threshold: 0.1 } 
    );
  
    if (img) observer.observe(img);
    if (textDivs) observer.observe(textDivs);
  
    return () => observer.disconnect();
  }, []);

  return (
    <div className='homeContainer'>
        <div>
          <Nav />
        </div>
        <div className='TextImgContainer'>
          <div className='hometext'>
            <div className='textDivs'>
              <h2>Hi, Meet</h2>
              <h3>Abhulimen Francisco</h3>
              <p>A Progressive</p>
            </div>
            <div>
              <TextAnimation />
            </div>
          </div>
          <div className='homeImg'>
            <div className="overlayHome"></div>
            <img src={DevPicture} alt="Developers image" />
          </div>
        </div>
        <div>
          <NavPopups />
        </div>
    </div>
  )
}
