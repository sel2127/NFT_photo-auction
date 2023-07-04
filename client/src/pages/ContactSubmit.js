import React from 'react'
import '../styles/ContactSubmit.css'
import { ArrowBack } from '@mui/icons-material'
import { Link } from 'react-router-dom'

function ContactSubmit() {
  return (
    <div>
      <Link to="/"><ArrowBack /></Link>  
      <div className='contactSubmit'>
      <h2>Your message is successfullly sent. Thank You</h2>
      </div> 
    </div>
  )
}

export default ContactSubmit