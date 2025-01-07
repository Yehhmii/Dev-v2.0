import React, {useRef} from 'react'
import './navPopups.css'
import envelope from '../../images/envelope-at.svg'
import telephone from '../../images/telephone.svg'

export default function navPopups() {

  return (
    <div className='navItemsContainer'>
        <div className='upperphone'>
            <img src={telephone} alt="envelope icon" /><h3>+2348158619466</h3>
        </div>
        <div className='upperemail'>
            <img src={envelope} alt="telephone icon" />
            <a href="mailto:yehhmiihithub@gmail.com" style={{ textDecoration: 'none', color: 'inherit' }}>
                <h3>yehhmiihithub@gmail.com</h3>
            </a>
        </div>
    </div>
  )
}
