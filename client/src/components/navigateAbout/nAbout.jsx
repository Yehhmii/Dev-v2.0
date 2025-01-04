import React, { useState } from 'react'
import './nAbout.css';
import Nav from '../nav/nav.jsx'
import Footer from '../footer/footer.jsx'

export default function nAbout() {
    const [email, setEmail] = useState()
    const [message, setMessage] = useState()

    const handleSubmit = async (e) => {
        e.preventDefault();

        try{
            const response = await fetch('http://localhost:5000/request-resume', {
                method: 'POST',
                headers: {
                    'content-Type': 'application/json',
                },
                body: JSON.stringify({ email }),
            });
            
            const data = await response.json();

            if (response.ok) {
                setMessage('Your request have been sent!');
            } else {
                setMessage(`Error:${data.error}`);
            }
        } catch (error) {
            setMessage('something went wrong. Please try again later.')
        }
    };

  return (
    <div className='aboutNContainer'>
        <div className='backgroundNav'>
            <Nav /> 
        </div>
        <div>
            <h3 className='cardAbout2'>About Me</h3>
            <p className='cardAbout2'>I'm a progressive software developer with a skilled aptitude for optimizing designs to meet both current and future demands. I excel in high-pressure environments, consistently meeting challenging design standards and tight schedules. My expertise lies in Python development, full-stack development, and utilizing advanced design tools. <br />
            As an innovative Software Developer, I have a proven track record in designing, debugging, and deploying software for both client and server applications. I bring a customer-centric approach and exceptional project management skills, thriving in environments where deadlines and interruptions are the norm.<br />
            I build strong relationships with both technical and non-technical personnel, facilitating effective communication, teaching, and learning. I am dedicated to completing tasks efficiently, contributing to team success, and adapting quickly to new challenges and policies. My willingness to take on any task ensures that I am always ready to support team objectives and drive project success.<br />
            I began the world of tech studying software engineering as a student, wasn't really into it at the beginning, not untill my third year in the university when I feel in love with tech, but it felt like I have wasted my time already so I wasted no more time and left no hour idol. I would say it wasn't an easy path especially at the beginning cause I was in 'tutorial hell' for a long time till I started working on projects which really helped me advance and working my IT at Neo clouds technologies also helped me to see the world of tech from another angle, I can say I'm still working hard till this day and my story is a continuous one so keep in touch.</p>
        </div>
        <div className='cardResumeContainer'>
            <div className='cardResume'>
                <div className='circle'></div>
                <div className='circle'></div>
                <div className='circle'></div>
                <div className='circle'></div>
                <div className='circle'></div>
            </div>
            <div className='resume'>
                <h3>Request Resume</h3>
                <form onSubmit={handleSubmit}>
                    <input 
                    type="text" 
                    placeholder='Enter Email' 
                    className='resumeInput'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    />{' '} 
                    <br/>
                    <button className='button-89 move'>Send</button>
                </form>
                {message && <p className="message">{message}</p>}
            </div>

        </div>
        <div>
            <Footer />
        </div>
    </div>
  )
}
