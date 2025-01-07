import React from 'react';
import { Link } from 'react-router-dom';
import Scroll from 'react-scroll';
import { useScrollAnimation } from './useScrollAnimation';
import './infoSection.css';

export default function InfoSections() {
    useScrollAnimation();
    const ScrollLink = Scroll.Link;

    return (
        <div className="infoSectionsContainer">
            <div className="section" id="aboutMe">
                <Link to="/about" className="innerSection">
                    <h2>Know About Me</h2>
                </Link>
            </div>
            <div className="section" id="otherThings">
                <Link
                    to="/about"
                    onClick={() => {
                    setTimeout(() => {
                        scroll.scrollTo('otherskills', {
                        duration: 500,
                        smooth: 'easeInOutQuad',
                        });
                    }, 500); 
                    }}
                    className="innerSection"
                >
                    <h2>Other Things</h2>
                </Link>
            </div>
            <div className="section" id="skills">
                <ScrollLink to="skillsSection" smooth={true} duration={500} className="innerSection">
                    <h2>Tech Skills</h2>
                </ScrollLink>
            </div>
            <div className="section" id="quickLink">
                <ScrollLink to="targetContact" smooth={true} duration={500} className="innerSection">
                    <h2>Quick Links</h2>
                </ScrollLink>
            </div>
        </div>
    );
}
