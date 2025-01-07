import React from 'react'
import './homebtn.css'
import { Link } from 'react-router-dom'

export default function btn() {
  return (
    <div>      
        <Link to='https://wa.me/qr/KTLXME5CIO5EP1'>
            <button class="button-84" role="button">let's chat</button>
        </Link>
    </div>
  )
}
