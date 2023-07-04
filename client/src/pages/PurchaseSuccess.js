import React from 'react'
import ReactConfetti from 'react-confetti'
import '../styles/Confetti.css'
import { ArrowBack, Instagram, Twitter } from '@mui/icons-material'
import { Link } from 'react-router-dom'

const PurchaseSuccess = () => {  
  return (
    <div>
      <ReactConfetti />
      <Link to="/explore"><ArrowBack /></Link>
      <div className='confetti'>
        <p>Congratulations</p>
        <p>You have made your offer</p>
      </div>
      
    </div>
  )
}

export default PurchaseSuccess
