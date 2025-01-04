import React from 'react'
import './btn.css'
import { Link } from 'react-router-dom'

export default function btn() {
  return (
    <div>      
        <Link to='/about'>
            <button class="button-89" role="button">Learn more</button>
        </Link>
    </div>
  )
}
