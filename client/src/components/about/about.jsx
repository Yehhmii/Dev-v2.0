import React from 'react'
import './about.css'
import DevPic from '../../images/dev1.jpeg'
import Btn from './btn'

export default function about() {
  return (
    <div>
        <div className='aboutContainer'>
            <div className='topHeading'>
                <h3>About Me</h3>
            </div>
            <div className='messageIcon'>
                <p>I'm a progressive software developer with a skilled aptitude for optimizing designs to meet both current and future demands. I excel in high-pressure environments, consistently meeting challenging design standards and tight schedules. My expertise lies in Python development, full-stack development, and utilizing advanced design tools. <br />
                As an innovative Software Developer, I have a proven track record in designing, debugging, and deploying software for both client and server applications. I bring a customer-centric approach and exceptional project management skills, thriving in environments where deadlines and interruptions are the norm.
                </p>
            </div>
            <div className='aboutPicture'>
                <img src={DevPic} alt="Dev image" />
            </div>
            <div className='aboutBtn'>
                <Btn/>
            </div>
        </div>
    </div>
  )
}
