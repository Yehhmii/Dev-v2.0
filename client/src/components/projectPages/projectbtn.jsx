import React from 'react'
import './projectbtn.css'
import { useNavigate } from 'react-router-dom'

export default function btn() {
    const navigate = useNavigate();

    const handleGoBack = () => {
        navigate(-1);
    }

  return (
    <div>      
        <button class="button-88" onClick={handleGoBack}>Back</button>
    </div>
  )
}
