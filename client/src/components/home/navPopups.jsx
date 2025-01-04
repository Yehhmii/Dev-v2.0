import React, {useRef} from 'react'
import './navPopups.css'
import { Link } from 'react-router-dom'
import Scroll from 'react-scroll'

export default function navPopups() {
    const ScrollLink = Scroll.Link;
  return (
    <div className='navItemsContainer'>
        <nav>
            <div className='navItems'>
                <div>
                    <h3>Fill at</h3>
                </div>
                <div className='learnDiv'>
                    <h3>Learn More</h3>
                </div>
                <div className='ExploreDiv'>
                    <h3>Explore my</h3>
                </div>
                <div className='AndDiv'>
                    <h3>And</h3>
                </div>
            </div>
            <ul className='navLists'>
                <li>
                    <Link to='/'>
                        <span> Home </span>
                    </Link>
                </li>

                <li>
                    <Link to='/about'>
                        <span> About </span>
                    </Link>
                </li>
                
                <li>
                    <ScrollLink to="target" smooth={true}>
                        <span> Skills </span>
                    </ScrollLink>
                </li>
               
                <li>
                <ScrollLink to="targetContact" smooth={true}>
                        <span> Contact </span>
                    </ScrollLink>
                </li>
            </ul>
        </nav>
    </div>
  )
}
