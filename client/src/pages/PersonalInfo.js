import React from 'react'
import { ArrowBack } from '@mui/icons-material'
import { Link } from 'react-router-dom'
import '../styles/PersonalInfo.css'

function PersonalInfo() {
  return (
    <div>
        <Link to="/explore"><ArrowBack /></Link>
        <div className='personalInfo'>
        <button>Personal Information</button>
        <p><span>Name</span><span>Tsion Moges</span></p>
        <p><span>Email</span><span>me@gmail.com</span></p>
        <p><span>Price Provided</span><span>5.5 ETH</span></p>
        </div>
    </div>
  )
}

export default PersonalInfo
